import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";

import { useNavigation } from "@react-navigation/native";
const JobCardGoogle = ({
  title,
  subtitle,
  salary,
  icon = require("../assets/icons/google.png"),
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("JobDetailsScreen")}
      activeOpacity={0.5}
      style={styles.card}
    >
      <Image source={icon} style={styles.logo} />
      <Text style={styles.position}>{title}</Text>
      <Text style={styles.company}>{subtitle}</Text>
      <Text style={styles.salary}>{salary}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    width: "42%",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 12,
  },
  position: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    color: "rgba(13, 13, 38, 0.5)",
    marginBottom: 9,
  },
  salary: {
    fontSize: 12,
    fontFamily: "Medium",
    color: colors.primaryBlack,
  },
});

export default JobCardGoogle;
