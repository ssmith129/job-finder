import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

// Accept props in JobCard
const JobCard = ({ job }) => {
  return (
    <ImageBackground source={job.backgroundImage} style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Image source={job.companyIcon} style={styles.companyIcon} />
        <View>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.companyName}>{job.company}</Text>
        </View>

        <Image
          source={require("../assets/icons/bookmarkIcon.png")}
          style={styles.bookmarkIcon}
        />
      </View>
      <View style={styles.tagContainer}>
        {job.tags.map((tag, index) => (
          <View style={styles.tag} key={index}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 24,
    overflow: "hidden",
    padding: 24,
    width: width / 1.2,
    minHeight: 186,
    marginRight:10
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  companyIcon: {
    width: 46,
    height: 46,
    marginRight: 16,
  },
  jobTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.white,
  },
  bookmarkIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 0,
    top: 4,
  },
  companyName: {
    fontSize: 14,
    color: colors.white,
    fontFamily: "Medium",
    marginTop: 3,
  },
  tagContainer: {
    flexDirection: "row",
    marginVertical: 24,
  },
  tag: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 26,
    minHeight: 26,
    paddingHorizontal: 16,
  },
  tagText: {
    fontSize: 11,
    color: colors.white,
    fontFamily: "Regular",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  salary: {
    fontSize: 13,
    fontFamily: "Medium",
    color: colors.white,
  },
  location: {
    fontSize: 13,
    fontFamily: "Medium",
    color: colors.white,
  },
});

export default JobCard;
