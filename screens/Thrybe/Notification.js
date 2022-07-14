import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Loader from "../../components/Loader";
import {
  images,
  FONTS,
  SIZES,
  COLORS,
  icons,
  constants,
  dummyData,
} from "../../constants";
// import GiftModal from "./GiftModal";
// import MessageModal from "./MessageModal";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { scale, verticalScale } from "react-native-size-matters";
import {
  IconButton,
  Header,
  TextIconButton,
  FormInput,
} from "../../components";

const Notification = ({ navigation, notifications }) => {
  const [search, setSearch] = React.useState("");
  const [transactions, setTransactions] = React.useState([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState([]);

  React.useEffect(() => {
    searchTransactions();
  }, []);

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

  const MatchCategory = [
    {
      id: 12,
      title: "All",
    },
    {
      id: "2",
      title: "Deposit",
    },
    {
      id: "3",
      title: "Withdrawal",
    },
    {
      id: "4",
      title: "Pending",
    },
    {
      id: "5",
      title: "Success",
    },
    {
      id: "6",
      title: "Failed",
    },
  ];

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
        data={MatchCategory}
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
                            Name: {`${item.name}`}
                          </Text>

                          <Text
                            style={{
                              fontSize: 12,
                              lineHeight: 18,
                              fontFamily: "Poppins-Regular",
                              marginRight: SIZES.base,
                            }}
                          >
                            Type: {`${item.type}`}
                          </Text>
                          <Text
                            style={{
                              fontSize: 12,
                              lineHeight: 18,
                              fontFamily: "Poppins-Regular",
                              marginRight: SIZES.base,
                            }}
                          >
                            Status: {`${item.status}`}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={(item) => `${item.id}`}
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
  );
};

function mapStateToProps(state) {
  return {
    user: state.accountReducer.user,
    loading: state.notificationReducer.loading,
    allUsers: state.accountReducer.allUsers,
    walletInfo: state.walletReducer.walletInfo,
    myGiftToken: state.giftReducer.myGiftToken,
    notifications: state.notificationReducer.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTransactions: (data) => {
      console.log("ANOTHER USER: ", data);
      return dispatch(walletTransactions(data));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
