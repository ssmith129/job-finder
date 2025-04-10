import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import { RFValue } from "react-native-responsive-fontsize";

const CustomTextInput = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  onToggleSecureEntry,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        returnKeyType="done"
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.borderGray}
        keyboardType={keyboardType}
      />
      {secureTextEntry !== undefined && (
        <TouchableOpacity style={styles.icon} onPress={onToggleSecureEntry}>
          <AntDesign
            name={secureTextEntry ? "eyeo" : "eye"}
            size={24}
            color={secureTextEntry ? colors.eyeGray : colors.primaryBlack}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    minHeight: 52,
    borderWidth: 1,
    borderColor: colors.borderGray,
    marginHorizontal: 24,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.01,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.naturalText,
    fontFamily: "Regular",
  },
  icon: {},
  labelText: {
    fontSize: RFValue(12.5),
    fontFamily: "SemiBold",
    color: colors.naturalText,
  },
});
