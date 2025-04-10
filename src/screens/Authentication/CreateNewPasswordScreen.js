import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Keyboard,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import colors from "../../config/colors";
import HeaderBack from "../../components/HeaderBack";
import CustomTextInput from "../../components/CustomTextinput";
import { RFValue } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../components/CustomButton";

export default function CreateNewPasswordScreen() {
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [cpassword, setCPassword] = useState("");
  const [secureCTextEntry, setSecureCTextEntry] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const toggleSecureEntry = () => {
    setSecureTextEntry((prev) => !prev);
  };
  const toggleCSecureEntry = () => {
    setSecureCTextEntry((prev) => !prev);
  };
  const isFormFilled = password && cpassword;

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={"Reset Password"} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={styles.createNewPasswordAvatar}
            source={require("../../assets/icons/createNewPasswordAvatar.png")}
          />
        </View>

        <View>
          <Text style={styles.createNewPasswordText}>Create New Password</Text>
        </View>

        <View>
          <Text style={styles.labelText}>Password</Text>

          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            onToggleSecureEntry={toggleSecureEntry}
          />
        </View>

        <Text style={styles.labelText}>Confirm Password</Text>

        <CustomTextInput
          placeholder="Confirm Password"
          value={cpassword}
          onChangeText={setCPassword}
          secureTextEntry={secureCTextEntry}
          onToggleSecureEntry={toggleCSecureEntry}
        />

        <Text style={styles.passwordRuleText}>
          *Password at least have 8 characters, including{"\n"}
          number and symbol.
        </Text>
      </KeyboardAwareScrollView>
      {!isKeyboardVisible && (
        <View style={styles.btnContainer}>
          <CustomButton disabled={!isFormFilled} title="Reset Password " />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  createNewPasswordAvatar: {
    width: 200,
    height: 180,
    alignSelf: "center",
    marginTop: 36,
  },
  createNewPasswordText: {
    fontSize: 24,
    fontFamily: "Bold",
    color: colors.naturalText,
    marginHorizontal: 24,
    marginTop: 40,
    marginBottom: 24,
  },
  labelText: {
    fontSize: RFValue(12.5),
    color: colors.naturalText,
    fontFamily: "SemiBold",
    marginHorizontal: 24,
    marginBottom: 8,
  },
  inputsContainer: {
    marginTop: 32,
  },
  passwordRuleText: {
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
    marginHorizontal: 24,
  },
  btnContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Platform.OS === "android" ? 20 : 40,
  },
});
