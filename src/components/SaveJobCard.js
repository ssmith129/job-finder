import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";

import { useNavigation } from "@react-navigation/native";
const JobCard = ({ logo, title, company, salary, location, status, type }) => {
  const statusStyles = {
    statusContainer: {
      ...styles.statusContainer,
      backgroundColor:
        status === "Open"
          ? "#E8FDF2"
          : status === "Closed"
          ? "#FFEDED"
          : "#EDF3FC",
    },
    statusText: {
      ...styles.status,
      color:
        status === "Open"
          ? "#0E9D57"
          : status === "Closed"
          ? "#DC312D"
          : "#5386E4",
    },
  };
 
const navigation= useNavigation();

  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('CompanyJobListingScreen')}
    activeOpacity={0.5}
    style={styles.card}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.jobInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <View style={styles.salaryLocationContainer}>
          <Text style={styles.salary}>{salary}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={statusStyles.statusContainer}>
          <Text style={statusStyles.statusText}>{status}</Text>
        </View>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginHorizontal: 24,
    paddingVertical: 20,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 24,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 24,
  },
  jobInfo: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  company: {
    fontSize: 13,
    color: "rgba(13, 13, 38, 0.5)",
    fontFamily: "Regular",
    marginTop: 4,
  },
  salaryLocationContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  salary: {
    fontSize: 12,
    color: colors.primaryBlack,
    fontFamily: "Medium",
  },
  location: {
    fontSize: 13,
    color: "rgba(13, 13, 38, 0.5)",
    fontFamily: "Regular",
    marginTop: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 23,
  },
  statusContainer: {
    backgroundColor: "#FFEDED",
    borderRadius: 52,
    paddingHorizontal: 34,
    paddingVertical: 6,
  },
  status: {
    fontSize: 13,
    color: "#DC312D",
    fontFamily: "Medium",
  },
  type: {
    fontSize: 12,
    color: colors.primaryBlack,
    fontFamily: "Medium",
  },
});

export default JobCard;
