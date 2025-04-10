import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import HeaderBack from "../../components/HeaderBack";
import CustomButton from "../../components/CustomButton";

export default function ForgotPasswordScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('sms');
  const OptionContainer = ({
    selected,
    onPress,
    text,
    iconComponent,
    title,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.optionContainer,
          { borderColor: selected ? colors.primaryBlue : colors.disableGray },
        ]}
      >
        <Image source={iconComponent} style={styles.icon}></Image>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.optionText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBack title={"Forgot Password"} />

      <Image
        style={styles.forgotpasswordIcon}
        source={require("../../assets/images/forgotPasswordIcon.png")}
      />

      <Text style={styles.forgotDescription}>
        Calm down, you can still reset your password.{"\n"}
        Please choose where we can contact you.
      </Text>

      <View style={styles.typeSelectionContaine}>
        <OptionContainer
          title={"Via SMS"}
          selected={selectedOption === "sms"}
          onPress={() => setSelectedOption("sms")}
          text="+1 7523 **** 123"
          iconComponent={require("../../assets/icons/viaSmam.png")}
        />
        <OptionContainer
          title={"Via E-mail"}
          selected={selectedOption === "email"}
          onPress={() => setSelectedOption("email")}
          text="Adamlevine@gmail.com"
          iconComponent={require("../../assets/icons/viaEmail.png")}
        />
      </View>

      <View style={styles.footerButtoContainer}>
        <CustomButton 
        onPress={()=>navigation.navigate('OTPVerificationScreen')}
        title={"Continue"} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  forgotpasswordIcon: {
    width: 260,
    height: 176,
    alignSelf: "center",
    marginTop: 44,
  },
  forgotDescription: {
    color: colors.graynite,
    fontFamily: "Regular",
    fontSize: 12,
    textAlign: "center",
    marginTop: 32,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.disableGray,
    borderRadius: 10,
    padding: 12,
    paddingHorizontal: 24,
    marginBottom: 24,
    backgroundColor: colors.white,
    height: 72,
    marginHorizontal: 24,
  },
  icon: {
    marginRight: 24,
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
    marginBottom: 4,
  },
  optionText: {
    fontSize: 14,
    color: colors.naturalText,
    fontFamily: "SemiBold",
  },
  typeSelectionContaine: {
    marginTop: 38,
  },
  footerButtoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: Platform.OS === "android" ? 20 : 40,
  },
});
