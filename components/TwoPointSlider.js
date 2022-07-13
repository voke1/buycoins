import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, FONTS, SIZES } from "../constants";

const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
}) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      markerOffsetY={20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 5,
        borderRadius: 5,
        backgroundColor: "#F2F2F2",
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                // borderWidth: 0,
                borderColor: "#F2F2F2",
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            />
            <Text
              style={{
                marginTop: 12,
                color: COLORS.primary,
                // ...FONTS.body3,
                textAlign: "center",
              }}
            >
              {/* {prefix}
              {e.currentValue}
              {postfix} */}
            </Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});

export default TwoPointSlider;
