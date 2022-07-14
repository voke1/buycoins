import React from "react";
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
// import GiftModal from "./GiftModal";
// import MessageModal from "./MessageModal";
import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  useQuery,
  gql,
  ApolloProvider,
} from "@apollo/client";
import { GET_TRANSACTIONS } from "../../graphql/queries";
import { onError } from "@apollo/client/link/error";
import { connect } from "react-redux";
import { FormInput } from "../../components";

const Transactions = () => {
  const [search, setSearch] = React.useState("");
  const [transactions, setTransactions] = React.useState([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState([]);

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

  // console.log(massageTransactions);

  return (
    <ApolloProvider client={client}>
      <View
        style={{
          flex: 1,
          // marginHorizontal: SIZES.padding,
          // paddingTop: SIZES.padding,
          backgroundColor: COLORS.main,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
        }}
      >
        {/* {renderHeader()} */}
        <StatusBar
          barStyle="light-content"
          hidden={true}
          backgroundColor="#9A7BD5"
          networkActivityIndicatorVisible={true}
        />

        <Text
          style={{
            fontSize: 25,
            lineHeight: 40,
            fontFamily: "Poppins-Bold",
            color: COLORS.primary,
          }}
        >
          Transactions
        </Text>
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
                style={{
                  height: 35,
                  marginHorizontal: SIZES.base,
                  marginVertical: SIZES.padding,
                  paddingHorizontal: SIZES.base * 2,
                  borderRadius: 50,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: COLORS.lightGray,
                }}
                onPress={() => filterTransactions(item.title)}
              >
                <Text
                  style={{
                    paddingRight: SIZES.base,
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {
          // <View style={{ height: SIZES.height / 1.3 }}>
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
                    // backgroundColor: "red",
                    marginTop: 5,
                  }}
                >
                  {/* <View style={{}}> */}
                  <Section title={item.date} />
                  {/* </View> */}
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
                          style={{
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
                          }}
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
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 18,
                                fontFamily: "Poppins-Regular",
                                marginRight: SIZES.base,
                              }}
                            >
                              <Text
                                style={{
                                  fontFamily: "Poppins-Bold",
                                }}
                              >
                                Name:
                              </Text>{" "}
                              {`${item.name}`}
                            </Text>

                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 18,
                                fontFamily: "Poppins-Regular",
                                marginRight: SIZES.base,
                              }}
                            >
                              <Text
                                style={{
                                  fontFamily: "Poppins-Bold",
                                }}
                              >
                                Type:
                              </Text>{" "}
                              {`${item.type}`}
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 18,
                                fontFamily: "Poppins-Regular",
                                marginRight: SIZES.base,
                                // fontWeight: "bold"
                              }}
                            >
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
          // </View>
        }

        {/* List  */}
      </View>
    </ApolloProvider>
  );
};

export default Transactions;
