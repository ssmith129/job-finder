import { View, StatusBar, Platform } from "react-native";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import Navigation from "./src/navigation/Navigation";
export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  const [loaded] = useFonts({
    Bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    SemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    Medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    Regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Light: require("./src/assets/fonts/Poppins-Light.ttf"),
  });
  if (!loaded) {
    return false;
  }

  const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 0 : 0;

  return (
    <View
      style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "#fff", flex: 1 }}
    >
      <StatusBar
        translucent
        backgroundColor={"#FAFAFD"}
        barStyle="dark-content"
      />

      <Navigation />
    </View>
  );
}
