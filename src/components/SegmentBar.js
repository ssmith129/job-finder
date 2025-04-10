import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

const SegmentedControl = ({ segments, selectedIndex, onSelect }) => {
  const segmentWidth = (width - 48) / segments.length; // 48 is the total horizontal padding
  const indicatorPosition = useRef(
    new Animated.Value(selectedIndex * segmentWidth)
  ).current;

  useEffect(() => {
    Animated.timing(indicatorPosition, {
      toValue: selectedIndex * segmentWidth,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [selectedIndex, segmentWidth]);

  return (
    <View style={styles.container}>
      {segments.map((segment, index) => (
        <TouchableOpacity
          key={segment}
          style={styles.segment}
          onPress={() => onSelect(index)}
        >
          <Text
            style={[
              styles.segmentText,
              selectedIndex === index && styles.selectedText,
            ]}
          >
            {segment}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.indicator,
          {
            width: segmentWidth,
            left: segmentWidth * 0.5,
            transform: [
              {
                translateX: Animated.subtract(
                  indicatorPosition,
                  segmentWidth * 0.5
                ),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1FA",
    width: width - 48,
    alignSelf: "center",
  },
  segment: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentText: {
    color: "#979797",
    fontSize: 14,
    fontFamily: "Medium",
    textAlign: "center",
  },
  selectedText: {
    color: colors.primaryBlue,
    fontFamily: "Medium",
    fontSize: 14,
    textAlign: "center",
  },
  indicator: {
    position: "absolute",
    bottom: -1,
    height: 2,
    backgroundColor: colors.primaryBlue,
  },
});

export default SegmentedControl;
