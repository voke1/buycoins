import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const RadioButton = ({
  containerStyle,
  label,
  labelStyle,
  iconStyle,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{ marginLeft: 5, width: 20, height: 20, ...iconStyle }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          color: COLORS.white,
          fontWeight: "bold",
          // ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
