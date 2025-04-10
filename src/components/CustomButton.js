import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

const CustomButton = ({ title, onPress, disabled, bordered }) => {
  const containerStyles = [styles.buttonContainer];
  const textStyles = [styles.text];

  if (disabled) {
    containerStyles.push(styles.disabled);
    textStyles.push(styles.disabledText);
  } else if (bordered) {
    containerStyles.push(styles.bordered);
    textStyles.push(styles.borderedText);
  }

  const renderContent = () => {
    if (bordered || disabled) {
      return <Text style={textStyles}>{title}</Text>;
    } else {
      return (
        <View style={{ ...styles.gradient }}>
          <Text style={textStyles}>{title}</Text>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={containerStyles}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 11,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: width - 48,
    alignSelf: "center",
    minHeight: 56,
    marginBottom: 8,
    backgroundColor: colors.primaryBlue,
  },
  gradient: {},
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
    fontFamily: "Bold",
  },
  disabled: {
    backgroundColor: colors.disableGray,
    opacity: 1,
  },
  disabledText: {
    color: colors.textGray,
  },
  bordered: {
    borderWidth: 2,
    borderColor: colors.purpleTwo,
    backgroundColor: "transparent",
  },
  borderedText: {
    color: colors.purpleOne,
  },
});

export default CustomButton;
