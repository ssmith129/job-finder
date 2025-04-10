import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import JobCardGoogle from "../../components/JobCardGoogle";
import JobItem from "../../components/JobItem";
const { width } = Dimensions.get("window");
export default function CompanyJobListingScreen() {
  const jobListData = [
    {
      id: "1",
      title: "Product Manager",
      company: "Google",
      salary: "$184,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/google.png"),
    },
    {
      id: "2",
      title: "UX Designer",
      company: "Google",
      salary: "$284,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/google.png"),
    },
    {
      id: "3",
      title: "Web Developer",
      company: "Google",
      salary: "$484,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/google.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.arrowBack}
          source={require("../../assets/icons/arrow-back-circle.png")}
        />

        <Text style={styles.title}>Google Jobs</Text>
      </View>

      <View style={styles.openHiredMainContainer}>
        <View>
          <Text style={styles.openTextTitle}>Open</Text>
          <Text style={styles.openJobsSubtitle}>140</Text>
        </View>

        <View>
          <Image
            style={styles.topeGoogleIcon}
            source={require("../../assets/icons/google.png")}
          />
          <Text style={styles.openJobsSubtitle}>Google</Text>
        </View>

        <View>
          <Text style={styles.openTextTitle}>Hired</Text>
          <Text style={styles.openJobsSubtitle}>176K</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.firstFeaturedJobsMainContainer}>
            <View style={styles.feturedJobsTextRow}>
              <Text style={styles.feauredJobText}>Featured Jobs</Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>
          </View>

          <View style={styles.featuredJobsFirstContainer}>
            <JobCardGoogle
              title={"Sr Developer"}
              subtitle={"Google"}
              salary={"$115,000/y"}
            />

            <JobCardGoogle
              title={"Jr Executive"}
              subtitle={"Google"}
              salary={"$96,000/y"}
            />
          </View>

          <View>
            <View style={styles.secondFeaturedJobsMainContainer}>
              <View style={{ ...styles.feturedJobsTextRow, marginTop: 24 }}>
                <Text style={styles.feauredJobText}>Featured Jobs</Text>
                <Text style={styles.seeAllText}>See all</Text>
              </View>
            </View>
          </View>

          <View>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: 24, paddingBottom: 100 }}
              data={jobListData}
              renderItem={({ item }) => <JobItem {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
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
  arrowBack: {
    width: 42,
    height: 42,
    marginRight: 13,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    paddingHorizontal: 24,
  },
  footerContainer: {
    width: width,
    flex: 1,
    backgroundColor: "#FAFAFD",
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: "Bold",
    color: "#2C3131",
    position: "absolute",
    alignSelf: "center",
    textAlign: "center",
    left: 0,
    right: 0,
  },
  openTextTitle: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "#95969D",
  },
  openJobsSubtitle: {
    fontSize: 15,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginTop: 10,
    textAlign: "center",
  },
  topeGoogleIcon: {
    width: 40,
    height: 40,
  },
  openHiredMainContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
    marginTop: 33,
  },
  feturedJobsTextRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 38,
  },
  feauredJobText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "#2C3131",
  },
  seeAllText: {
    color: "#979797",
    fontSize: 12,
    fontFamily: "Regular",
  },
  featuredJobsFirstContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
