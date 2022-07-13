import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CustomSwitch = ({ value, onChange }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onChange(!value);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "green",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
          width: 55,
          padding: 5,
        }}
      >
        {/* Switch  */}
        <View
          style={value ? styles.switchOnContainer : styles.switchOffContainer}
        >
          {value && <Text style={styles.switchText}>ON</Text>}
          <View
            style={{
              backgroundColor: value ? COLORS.primary : "gray",
              ...styles.dot,
            }}
          />
         {!value && <Text style={[styles.switchText, {color: "black"}]}>OFF</Text>}
        </View>

        {/* Text */}
        {/* <Text
          style={{
            color: value ? COLORS.primary : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body4,
          }}
        >
          {" "}
          Save Me
        </Text> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  switchOnContainer: {
    width: 48,
    height: 22,
    paddingRight: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 8,
    // backgroundColor: COLORS.primary,
    backgroundColor: "rgba(132,42,131,0.5)",
    flexDirection: "row",
  },
  switchOffContainer: {
    width: 48,
    height: 22,
    paddingLeft: 2,
    justifyContent: "center",
    // borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    backgroundColor: COLORS.lightGray,
    flexDirection: "row",
  },
  switchText: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 10,
    textAlign: 'center',
    paddingHorizontal: 5,
    lineHeight: 22,

  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 15,
  },
});

export default CustomSwitch;
