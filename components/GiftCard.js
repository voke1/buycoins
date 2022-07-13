import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../constants";

const GiftCard = ({
  item,
  isSelected,
  onPress,
  children,
  radio,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 66,
        alignItems: "center",
        marginTop: 2,
        paddingHorizontal: SIZES.padding,
        // borderWidth: 2,
        // borderRadius: SIZES.radius,
        // borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {/* Radio Button  */}
      {radio && (
        <Image
          source={isSelected ? icons.check_on : icons.check_off}
          style={{ width: 25, height: 25 }}
        />
      )}

      {/* Card Image  */}
      <View
        style={{
          width: 60,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          //   borderWidth: 2,
          //   borderRadius: SIZES.radius,
          //   borderColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{ width: 35, height: 35 }}
        />
      </View>

      {/* Name  */}
      <Text style={{ flex: 1, marginLeft: SIZES.radius, fontSize: SIZES.h4 }}>
        {item.name}
      </Text>

      {children}

      {/* Name  */}
      <Text style={{ fontSize: SIZES.h4 }}>{item.amount}</Text>

      {/* <Text>{item.name}</Text> */}
    </TouchableOpacity>
  );
};

export default GiftCard;
