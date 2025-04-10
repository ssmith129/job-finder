import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get("window");
const JobItem = ({ title, company, salary, location, companyIcon }) => {
 
 const navigation=useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate('CategoryJobListingScreen')}
    activeOpacity={0.5}
    style={styles.container}>
      <Image source={companyIcon} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.company}>{company}</Text>
      </View>
      <View style={styles.salaryContainer}>
        <Text style={styles.salary}>{salary}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    paddingHorizontal: 24,
    width: width - 48,
    alignSelf: "center",
    minHeight: 74,
    marginBottom: 20,
  },
  icon: {
    width: 43,
    height: 43,
    resizeMode: "contain",
  },
  details: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginBottom: 4,
    width: 150,
  },
  company: {
    fontSize: 13,
    color: "rgba(13, 13, 38, 0.5)",
    fontFamily: "Regular",
  },
  salaryContainer: {
    alignItems: "flex-end",
  },
  salary: {
    fontSize: 12,
    fontFamily: "Medium",
    color: colors.primaryBlack,
    marginBottom: 3,
  },
  location: {
    fontSize: 13,
    color: "rgba(13, 13, 38, 0.5)",
    fontFamily: "Regular",
  },
});

export default JobItem;
