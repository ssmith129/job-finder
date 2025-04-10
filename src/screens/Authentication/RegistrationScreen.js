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
    Modal,
    TouchableWithoutFeedback
  } from "react-native";
  import React, { useEffect, useState, useRef } from "react";
  import colors from "../../config/colors";
  import CustomTextInput from "../../components/CustomTextinput";
  import { RFValue } from "react-native-responsive-fontsize";
  import CustomButton from "../../components/CustomButton";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
  import { AntDesign, Ionicons, Feather } from "@expo/vector-icons"; // Make sure to install expo/vector-icons
 
  const { width } = Dimensions.get("window");
  
  export default function RegistratiionScreen({ navigation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [footerVisible, setFooterVisible] = useState(true);
    const footerAnimation = useRef(new Animated.Value(1)).current;
    const [cpassword, setCPassword] = useState("");
    const [secureCTextEntry, setSecureCTextEntry] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [keepLoggedIn, setKeepLoggedIn] = useState(true);

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
    const toggleCSecureEntry = () => {
      setSecureCTextEntry((prev) => !prev);
    };
    const handlePressContinue = () => {
        setModalVisible(true);
    };
    
  
    const isFormFilled = name&& email && password&&cpassword;
  
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.flexOne}
        >
          <View style={styles.topTextContainer}>
            <Text style={styles.screenTitle}>Registration 👍🏻</Text>
            <Text style={styles.screenSubTitle}>
            Let’s Register. Apply to jobs!
            </Text>
          </View>
  
          <View style={styles.inputsContainer}>
            <Text style={styles.labelText}>Full Name</Text>
  
            <CustomTextInput
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.labelText}>Email Address</Text>
  
            <CustomTextInput
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.labelText}>Phone Number</Text>
  
            <CustomTextInput
              placeholder="Phone Number"
              value={number}
              onChangeText={setNumber}
              keyboardType={"phone-pad"}
            />
  
  
            <Text style={styles.labelText}>Password</Text>
  
            <CustomTextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              onToggleSecureEntry={toggleSecureEntry}
            />
  
            <Text style={styles.labelText}>Confirm Password</Text>

            <CustomTextInput
              placeholder="Confirm Password"
              value={cpassword}
              onChangeText={setCPassword}
              secureTextEntry={secureCTextEntry}
              onToggleSecureEntry={toggleCSecureEntry}
            />
  
            <View style={styles.keepLOggedInLeftCotntainer}>
            <TouchableOpacity onPress={() => setKeepLoggedIn(!keepLoggedIn)}>
              <Ionicons
                name={keepLoggedIn ? "checkbox" : "checkbox-outline"}
                size={24}
                color={colors.primaryBlue}
              />
            </TouchableOpacity>
            <Text style={styles.keepLoggedInText}>
            By creating an account, you aggree to our{'\n'}Terms and Conditions
            </Text>
          </View>

        <View>
        
        </View>
            <View style={styles.btnContainer}>
              <CustomButton
                title="Register"
                onPress={handlePressContinue}
                disabled={!isFormFilled}
              />
            </View>
    
          </View>
          <View
            style={[
              styles.footerContainer,
              
            ]}
          >
            <TouchableOpacity 
            onPress={()=>navigation.navigate('LoginScreen')}
            activeOpacity={0.8}>
              <Text style={styles.footerText}>
                Already have an account?{" "}
                <Text style={{ ...styles.footerText, color: colors.primaryBlue }}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
  

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
        
          <Image
          style={styles.modalImage}
          source={require('../../assets/icons/registerSuccessIcon.png')}
          />
            <Text style={styles.modalTextTitle}>Registration Success</Text>
            <Text style={styles.modalText}>
              Congratulations! Your registration is successful. We have sent you an email to verify your account.
            </Text>
            <CustomButton
              title="Login"
              onPress={() => {
                setModalVisible(!modalVisible);
                 navigation.navigate('ForgotPasswordScreen');
              }}
            />
            
            <TouchableOpacity
            onPress={()=>setModalVisible(false)}
            style={styles.borderButtonModal}
            >

            <Text
            style={styles.returnToHomePageButtonText}
            >Return to Homepage</Text>
            
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
      marginTop:8
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
      marginVertical:20
    },
    keepLoggedInRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:16,
      },
      keepLoggedInText: {
        fontSize: 14,
        fontFamily: "Regular",
        color: "#6B7280",
        marginLeft: 8,
      },
      keepLoggedInRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal:16,
      },
    
      keepLOggedInLeftCotntainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal:24,
        marginTop:8,
      },

    //   Modal Code
  
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      modalView: {
        width: '100%', 
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -2, 
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
  modalTextTitle: {
    marginBottom: 10,
    textAlign: "center",
    fontSize:18,
    fontFamily: "Bold",
    color: colors.naturalText,
  },
  modalText: {
    marginBottom: 46,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.graynite,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    marginTop: 15, 
  },
  secondaryButtonText: {
    color: colors.primaryBlue,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalImage:
  {
    width:120,
    height:120,
    marginBottom:24,
  
  },
  borderButtonModal:
  {
    width:width-48,
    height:50,
    borderWidth:1,
    borderColor:colors.grayborder2,
    alignSelf:"center",
    marginTop:8,
    borderRadius:8,
    backgroundColor:"transparent",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20,

  },
  returnToHomePageButtonText:
  {
   fontSize:14,
   fontFamily:"Bold",
   color:colors.black2,
  }


  });
  