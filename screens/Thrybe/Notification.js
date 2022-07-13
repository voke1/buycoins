import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
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
import { NavigationContext } from "react-navigation";

const Notification = ({ navigation, notifications }) => {
  const [notification, setNotification] = React.useState("");
  console.log("NOTIFICATION CHECK: ", notifications);
  const [showGiftModal, setShowGiftModal] = React.useState(false);
  const [showMessageModal, setShowMessageModal] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(false);

    // setTimeout(() => {
    //   setNotification(notifications);
    // }, 2000);
  }, []);

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
      number: 6,
    },
    {
      id: "2",
      title: "New",
      number: 6,
    },
    {
      id: "3",
      title: "Nearby",
      number: 0,
    },
    {
      id: "4",
      title: "Recent Activity",
      number: 6,
    },
  ];

  function renderHeader() {
    return (
      <Header
        // title="Discover"
        // subtitle="Lagos, NG"
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: 70,
          paddingHorizontal: SIZES.padding,
        }}
        titleStyle={{
          fontSize: 18,
          lineHeight: 27,
          fontFamily: "Poppins-Bold",
        }}
        rightComponent={
          <IconButton
            icon={icons.search}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              // borderWidth: 1,
              // borderRadius: SIZES.radius,
              // borderColor: "gray",
              // backgroundColor: "white",
            }}
            iconStyle={{
              width: 15,
              height: 15,
              tintColor: COLORS.black,
            }}
            onPress={() => console.log("RSSED")}
          />
        }
        leftComponent={
          <TextIconButton
            iconPosition="LEFT"
            label="Back"
            containerStyle={{
              justifyContent: "flex-start",
              backgroundColor: "transparent",
              paddingHorizontal: 0,
              marginVertical: SIZES.base,
            }}
            labelStyle={{
              color: COLORS.primary,
              fontFamily: "Poppins-Bold",
              lineHeight: 18,
              fontSize: 12,
              paddingHorizontal: SIZES.base,
            }}
            icon={icons.backCarat}
            iconStyle={{
              tintColor: COLORS.primary,
              width: SIZES.base,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        // marginHorizontal: SIZES.padding,
        // paddingTop: SIZES.padding,
        backgroundColor: COLORS.main,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {renderHeader()}

      <Text
        style={{
          fontSize: 25,
          lineHeight: 40,
          fontFamily: "Poppins-Bold",
          color: COLORS.primary,
        }}
      >
        Notification
      </Text>
      <FormInput
        placeholder="Search"
        autoCompleteType="password"
        // secureTextEntry={!showPass}
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
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginRight: SIZES.base,
        }}
        // label={"Confirm password"}
        inputContainerStyle={{
          // marginTop: SIZES.base,
          // borderRadius: SIZES.radius * 3,
          borderWidth: 1,
          borderColor: COLORS.lightGray,

          // // flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: 51,
        }}
        onChange={(value) =>
          setUserState({ ...userState, ...{ password: value } })
        }
        appendComponent={
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
                tintColor: COLORS.black,
              }}
              source={icons.microphone}
            />
          </TouchableOpacity>
        }
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
          height: SIZES.padding * 3,
          paddingHorizontal: SIZES.padding,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  height: 35,
                  // width: 80,
                  marginHorizontal: SIZES.base,
                  borderRadius: 50,
                  flexDirection: "row",
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingHorizontal: SIZES.padding,
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
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 12,
                    lineHeight: 18,
                  }}
                >
                  {item.number}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      {
        <FlatList
          data={dummyData.notifications}
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
                            backgroundColor: "rgba(132,42,131,0.4)",
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
                            alignItems: "center",
                            justifyContent: "space-between",
                            // marginLeft: SIZES.base,
                            // width: "80%",
                            flexDirection: "row",
                            flex: 1,
                            paddingHorizontal: SIZES.base,
                            // backgroundColor: "red",
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
                            {`${item.title}`}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 10,
                              lineHeight: 20,
                              fontFamily: "Poppins-Bold",
                            }}
                          >
                            {item.time}
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
