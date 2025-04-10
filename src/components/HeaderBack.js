import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";

import { useNavigation } from "@react-navigation/native";
export default function HeaderBack({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ zIndex: 99999 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.backIcon}
          source={require("../assets/icons/arrow-back-circle.png")}
        />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  backIcon: {
    width: 42,
    height: 42,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "Bold",
    color: colors.naturalText,
    position: "absolute",
    textAlign: "center",
    alignSelf: "center",
    left: 0,
    right: 0,
  },
});
