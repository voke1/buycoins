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
  const [transactions, setTransactions] = React.useState(dummyData.notifications)

  React.useEffect(() => {}, []);

  const searchTransactions = (value)=> {
    if(value){
      const newTransactions = transactions.filter((item)=> {
        // itemData = 
      })
    }
  }
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
      title: "Deposits",
    },
    {
      id: "3",
      title: "Withdrawals",
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
        placeholder="Search transactions"
        value={search}
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
        onChange={(value) => searchTransactions(value)}
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
        <FlatList
          data={transactions}
          contentContainerStyle={{
            backgroundColor: "white",
            // marginHorizontal: SIZES.padding,
            padding: SIZES.base,
            borderRadius: SIZES.radius,
            // marginBottom: SIZES.base,
            // backgroundColor: "red",
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  // backgroundColor: "white",
                  marginTop: 5,
                }}
              >
                {/* <View style={{}}> */}
                <Section title={item.title} />
                {/* </View> */}
                <FlatList
                  data={item.data}
                  style={{
                    justifyContent: "flex-start",
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
                          if (item.type == "gift") {
                            return setShowGiftModal(true);
                          } else if (item.type == "profile") {
                            return navigation.navigate("Stack", {
                              screen: "UserDetailScreen",
                            });
                          } else {
                            return console.log("PRESSED");
                          }
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
                            source={item.icon}
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
