import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/Authentication/OnboardingScreen";
import LoginScreen from "../screens/Authentication/LoginScreen";
import RegistratiionScreen from "../screens/Authentication/RegistrationScreen";
import ForgotPasswordScreen from "../screens/Authentication/ForgotPasswordScreen";
import OTPVerificationScreen from "../screens/Authentication/OTPVerificationScreen";
import CreateNewPasswordScreen from "../screens/Authentication/CreateNewPasswordScreen";
import TabNavigator from "./Tabs";
import NotificationsScreen from "../screens/Other/NotificationScreen";
import SearchScreen from "../screens/Other/SearchScreen";
import FilterScreen from "../screens/Other/FilterScreen";
import SearchResultScreen from "../screens/Other/SearchResultScreen";
import CompanyJobListingScreen from "../screens/Other/CompanyJobListingScreen";
import CategoryJobListingScreen from "../screens/Other/CategoryJobListingScreen";
import JobDetailsScreen from "../screens/Other/JobDetailsScreen";
import ApplyJobScreen from "../screens/Other/ApplyJobScreen";
import ApplicationTrackingScreen from "../screens/Other/ApplicationTrackingScreen";
import UploadResumeScreen from "../screens/Other/UploadResumeScreen";
import MessagesRoomDetailScreen from "../screens/Other/MessagesRoomDetailScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnboardingScreen"
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegistratiionScreen" component={RegistratiionScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />
        <Stack.Screen name="CreateNewPasswordScreen" component={CreateNewPasswordScreen} />

        <Stack.Screen name="tabs" component={TabNavigator} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen 
        options={{presentation:"modal"}}
        name="FilterScreen" component={FilterScreen} />

        <Stack.Screen 
        name="SearchResultScreen" component={SearchResultScreen} />
        <Stack.Screen 
        name="CompanyJobListingScreen" component={CompanyJobListingScreen} />
        <Stack.Screen 
        name="CategoryJobListingScreen" component={CategoryJobListingScreen} />
        <Stack.Screen 
        name="JobDetailsScreen" component={JobDetailsScreen} /> 
        <Stack.Screen 
        name="ApplyJobScreen" component={ApplyJobScreen} /> 
        <Stack.Screen 
        name="ApplicationTrackingScreen" component={ApplicationTrackingScreen} /> 
        <Stack.Screen 
        name="UploadResumeScreen" component={UploadResumeScreen} /> 
        <Stack.Screen 
        name="MessagesRoomDetailScreen" component={MessagesRoomDetailScreen} /> 
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
