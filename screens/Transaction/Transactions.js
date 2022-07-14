import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { FormInput } from "../../components";
import { GET_TRANSACTIONS } from "../../graphql/queries";

const Transactions = () => {
  const [search, setSearch] = React.useState("");
  const [transactions, setTransactions] = React.useState([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");
  React.useEffect(() => {
    searchTransactions();
  }, []);

  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        alert(`Graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:5000/graphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  const getTransactions = () => {
    const { error, loading, data } = useQuery(GET_TRANSACTIONS);
  };

  const filterTransactions = (value) => {
    if (value) {
      const newTransactions = dummyData.transactions.filter((item) => {
        console.log("ITEM: ", item.status);
        return item.status == value || item.type == value;
      });
      console.log("NEW TRANSACTIONS: ", newTransactions);
      massageTransactions(newTransactions);
    }
    if (value == "All") {
      massageTransactions(dummyData.transactions);
    }
  };

  const searchTransactions = (value) => {
    if (value) {
      const newTransactions = dummyData.transactions.filter((item) => {
        console.log("ITEM: ", item);
        itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = value.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("NEW TRANSACTION: ", newTransactions);
      massageTransactions(newTransactions);
    } else {
      massageTransactions(dummyData.transactions);
      // setFilteredTransactions(transactions)
    }
  };
  const Section = ({ title, onPress, children }) => {
    return (
      <View>
        {/* Header  */}
        <View
          style={
            {
              // marginTop: 20,
              // marginBottom: 20,
            }
          }
        >
          <Text
            style={{
              // fontWeight: "bold",
              color: COLORS.black,
              textAlign: "left",
              fontSize: 16,
              padding: SIZES.padding,
              lineHeight: 24,
              fontFamily: "Poppins-Medium",
            }}
          >
            {title}
          </Text>
        </View>

        {/* Content  */}
        {children}
      </View>
    );
  };

  const massageTransactions = (data) => {
    // this gives an object with dates as keys
    const groups = data.reduce((groups, transaction) => {
      const date = transaction.date.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(transaction);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const massageData = Object.keys(groups).map((date) => {
      return {
        date,
        data: groups[date],
      };
    });

    setTransactions(massageData);
  };

  return (
    <ApolloProvider client={client}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.main,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
        }}
      >
        <View>
          <StatusBar
            barStyle="light-content"
            hidden={true}
            backgroundColor="#9A7BD5"
            networkActivityIndicatorVisible={true}
          />

          {/* Header Text  */}
          <Text style={Styles.headerText}>Transactions</Text>

          {/* Search Bar  */}
          <FormInput
            placeholder="Search transactions..."
            // value={search}
            inputStyle={{
              borderRadius: SIZES.radius,
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              // paddingHorizontal: SIZES.base * 4,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              lineHeight: 21,
            }}
            containerStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: SIZES.base,
              width: "100%",
            }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              justifyContent: "center",
              alignItems: "center",
              height: 51,
            }}
            onChange={(value) => {
              console.log("VALUE: ", value);
              searchTransactions(value);
            }}
            prependComponent={
              <TouchableOpacity
                style={{
                  width: SIZES.radius,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                //   onPress={() => setShowPass(!showPass)}
              >
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: "gray",
                  }}
                  source={icons.search}
                />
              </TouchableOpacity>
            }
          />

          {/* Filter Items */}
          <FlatList
            data={dummyData.matchCategory}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              // height: 60,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[
                    Styles.filterItem,
                    {
                      backgroundColor:
                        selectedCategoryId == item.id ? "#9A7BD5" : "white",
                    },
                  ]}
                  onPress={() => {
                    setSelectedCategoryId(item.id);
                    filterTransactions(item.title);
                  }}
                >
                  <Text
                    style={{
                      paddingRight: SIZES.base,
                      fontFamily: "Poppins-Bold",
                      fontSize: 12,
                      lineHeight: 18,
                      color: selectedCategoryId == item.id ? "white" : "black",
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/* Transactions list */}
        {transactions ? (
          <FlatList
            data={transactions}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: SIZES.base,
              borderRadius: SIZES.radius,
              // flex: 1,
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => `${item.date}`}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    marginTop: 5,
                  }}
                >
                  <Section title={item.date} />

                  <FlatList
                    data={item.data}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={{
                      justifyContent: "flex-start",
                      // flex: 1,
                    }}
                    renderItem={({ item, index }) => {
                      return (
                        <TouchableOpacity
                          style={Styles.transaction}
                          onPress={() => {
                            console.log("PRESSED");
                          }}
                        >
                          <View
                            style={{
                              height: 60,
                              width: 60,
                              borderRadius: 70,
                              backgroundColor: "rgba(154,123,213,0.5)",

                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              resizeMode="contain"
                              source={icons.deposit}
                              style={{
                                height: "50%",
                                width: "50%",
                                tintColor: "white",
                                // borderRadius: 500,
                              }}
                            />
                          </View>

                          <View
                            style={{
                              justifyContent: "space-between",
                              flex: 1,
                              paddingHorizontal: SIZES.padding,
                            }}
                          >
                            <Text style={Styles.titleText}>
                              <Text
                                style={{
                                  fontFamily: "Poppins-Bold",
                                }}
                              >
                                Name:
                              </Text>{" "}
                              {`${item.name}`}
                            </Text>

                            <Text style={Styles.titleText}>
                              <Text
                                style={{
                                  fontFamily: "Poppins-Bold",
                                }}
                              >
                                Type:
                              </Text>{" "}
                              {`${item.type}`}
                            </Text>
                            <Text style={Styles.titleText}>
                              <Text
                                style={{
                                  fontFamily: "Poppins-Bold",
                                }}
                              >
                                Status:
                              </Text>{" "}
                              {`${item.status}`}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              );
            }}
            ListFooterComponent={<View style={{ height: 40 }} />}
          />
        ) : (
          <ActivityIndicator size={"large"} color="#9A7BD5" />
        )}

        {/* List  */}
      </View>
    </ApolloProvider>
  );
};

const Styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    lineHeight: 40,
    fontFamily: "Poppins-Bold",
    color: COLORS.primary,
  },
  filterItem: {
    height: 35,
    marginHorizontal: SIZES.base,
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.base * 2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  transaction: {
    color: COLORS.white,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    padding: SIZES.base,
    // marginVertical: 0.5,
    // justifyContent: "center"
    alignItems: "center",
    height: 85,
    // flexWrap: 'wrap'
    borderWidth: 1,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base,
    borderColor: COLORS.lightGray,
    flex: 1,
  },

  titleText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
    marginRight: SIZES.base,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
    marginRight: SIZES.base,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
    marginRight: SIZES.base,
  },
});

export default Transactions;
