import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../config/colors";
import HeaderBack from "../../components/HeaderBack";
import CustomButton from "../../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const OTPVerificationScreen = ({navigation}) => {
  const [OTP, setOTP] = useState(["", "", "", ""]);
  const [activeInputIndex, setActiveInputIndex] = useState(null);
  const inputs = useRef([]);
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

  const focusNext = (index, value) => {
    OTP[index] = value;
    setOTP([...OTP]);
    if (index < OTP.length - 1 && value) {
      inputs.current[index + 1].focus();
    }
    if (index === OTP.length - 1) {
      inputs.current[index].blur();
      // Call your method to verify the OTP here
    }
  };

  const focusPrev = (key, index) => {
    if (key === "Backspace" && index !== 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOTP = () => {
    const otpCode = OTP.join("");
    console.log("Verifying OTP:", otpCode);
    navigation.navigate('CreateNewPasswordScreen')
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.otpContainer}>
            <Text style={styles.otpText}>Verification Code</Text>
            <Text style={styles.otpDescText}>
              We have sent the code verification to{"\n"}your number{" "}
              <Text style={styles.phoneNumberText}>+1 7523 **** 123</Text>
            </Text>
            <View style={styles.inputContainer}>
              {OTP.map((_, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (inputs.current[index] = ref)}
                  onChangeText={(value) => focusNext(index, value)}
                  onKeyPress={({ nativeEvent }) =>
                    focusPrev(nativeEvent.key, index)
                  }
                  maxLength={1}
                  style={[
                    styles.otpInput,
                    activeInputIndex === index && styles.otpInputActive,
                  ]}
                  keyboardType="numeric"
                  textContentType="oneTimeCode"
                  onFocus={() => setActiveInputIndex(index)}
                  onBlur={() => setActiveInputIndex(null)}
                />
              ))}
            </View>
            <Text style={styles.timerText}>Expired in 0:28 seconds</Text>
            <TouchableOpacity onPress={verifyOTP}>
              <Text style={styles.resendText}>
                Didn't receive code?{" "}
                <Text style={styles.resendTextLink}>request again</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      {!isKeyboardVisible && (
        <View style={styles.footerButtonContainer}>
          <CustomButton
          title="Continue" onPress={verifyOTP} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  otpText: {
    fontSize: 22,
    fontFamily: "SemiBold",
    marginBottom: 16,
    marginTop: 24,
    marginHorizontal: 24,
  },
  otpDescText: {
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
    marginHorizontal: 24,
    lineHeight: 22,
  },
  phoneNumberText: {
    fontFamily: "Medium",
    color: colors.naturalText,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 20,
  },
  otpInput: {
    width: 55,
    height: 55,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Medium",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: colors.inputBackground,
  },
  otpInputActive: {
    borderColor: colors.primaryBlue,
  },
  timerText: {
    fontSize: 14,
    fontFamily: "Regular",
    color: colors.textGray,
    textAlign: "center",
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    fontFamily: "Regular",
    color: colors.textGray,
    textAlign: "center",
    marginTop: 30,
  },
  resendTextLink: {
    color: colors.primaryBlue,
  },
  footerButtonContainer: {},
});

export default OTPVerificationScreen;
