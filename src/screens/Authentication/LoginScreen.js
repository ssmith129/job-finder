import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import colors from "../../config/colors";
import CustomTextInput from "../../components/CustomTextinput";
import { RFValue } from "react-native-responsive-fontsize";
import CustomButton from "../../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [footerVisible, setFooterVisible] = useState(true);
  const footerAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        Animated.timing(footerAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
        setFooterVisible(false);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        Animated.timing(footerAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
        setFooterVisible(true);
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

 
  const handlePressContinue = () => {
    navigation.navigate("tabs");
  };

  const isFormFilled = email && password;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.flexOne}
      >
        <View style={styles.topTextContainer}>
          <Text style={styles.screenTitle}>Welcome Back 👋🏻</Text>
          <Text style={styles.screenSubTitle}>
            Let’s log in. Apply to jobs!
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.labelText}>Email Address</Text>

          <CustomTextInput
            placeholder="First Name"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.labelText}>Password</Text>

          <CustomTextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
            onToggleSecureEntry={toggleSecureEntry}
          />

         

          <TouchableOpacity
          onPress={()=>navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <CustomButton
              title="Login"
              onPress={handlePressContinue}
              disabled={!isFormFilled}
            />
          </View>

          <View style={styles.orContinueContainer}>
            <View style={styles.orSeprator} />

            <Text style={styles.orContinueWithText}>Or continue with</Text>

            <View style={styles.orSeprator} />
          </View>

          <View style={styles.socailContainer}>
            <TouchableOpacity style={styles.socialIconBackground}>
              <Image
                style={styles.socialIcon}
                source={require("../../assets/icons/apple.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIconBackground}>
              <Image
                style={styles.socialIcon}
                source={require("../../assets/icons/google.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialIconBackground}>
              <Image
                style={styles.socialIcon}
                source={require("../../assets/icons/facebook.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      {footerVisible && (
        <Animated.View
          style={[
            styles.footerContainer,
            {
              opacity: footerAnimation,
              transform: [
                {
                  translateY: footerAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
          onPress={()=>navigation.navigate('RegistratiionScreen')}
          activeOpacity={0.8}>
            <Text style={styles.footerText}>
              Haven’t an account?{" "}
              <Text style={{ ...styles.footerText, color: colors.primaryBlue }}>
                Register
              </Text>
            </Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  flexOne: {
    flex: 1,
  },
  screenTitle: {
    fontSize: RFValue(21),
    fontFamily: "SemiBold",
    color: colors.naturalText,
  },
  screenSubTitle: {
    fontSize: RFValue(12.5),
    fontFamily: "Regular",
    color: colors.naturalText,
  },
  topTextContainer: {
    marginTop: 40,
    marginHorizontal: 24,
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
  forgotPasswordText: {
    fontSize: RFValue(12.5),
    fontFamily: "Medium",
    color: colors.lightblue,
    textAlign: "right",
    marginRight: 24,
  },
  btnContainer: {
    marginTop: 32,
  },
  orSeprator: {
    width: width / 4,
    height: 0.5,
    backgroundColor: colors.borderGray,
  },
  orContinueWithText: {
    fontSize: 13,
    fontFamily: "Regular",
    color: colors.borderGray,
    marginHorizontal: 16,
  },
  orContinueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  socailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    marginTop: 54,
  },
  socialIconBackground: {
    width: 56,
    height: 56,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.02,
    shadowRadius: 10.84,
    elevation: 2,
  },
  socialIcon: {
    width: 26,
    height: 26,
  },
  footerText: {
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
    textAlign: "center",
  },
  footerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Platform.OS === "android" ? 15 : 30,
  },
});
