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
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import JobCardGoogle from "../../components/JobCardGoogle";
import JobItem from "../../components/JobItem";
const { width } = Dimensions.get("window");
export default function CategoryJobListingScreen({navigation}) {
  const jobListData = [
    {
      id: "1",
      title: "UX Designer",
      company: "Telegram",
      salary: "$84,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/telegram.png"),
    },
    {
      id: "2",
      title: "UX Designer L4",
      company: "Invision",
      salary: "$84,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/indesign.png"),
    },
    {
      id: "3",
      title: "UX Designer L4",
      company: "BMW",
      salary: "$84,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/bmw.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity
      style={{zIndex:9999}}
      onPress={()=>navigation.goBack()}
      > 
      <Image
          style={styles.arrowBack}
          source={require("../../assets/icons/arrow-back-circle.png")}
        />
        </TouchableOpacity>

        <Text style={styles.title}>UX Designer Jobs</Text>
      </View>

      <View style={styles.headerJobsView}>
        <Image
          style={styles.uxDesignIcon}
          source={require("../../assets/icons/UxDesignIcon.png")}
        />

        <View>
          <Text style={styles.foundJobsText}>437 Jobs</Text>
          <Text style={styles.foundJobsDescription}>
            The UX designer role is to make a pro-{"\n"}duct usable, enjoyable &
            accessible.
          </Text>
        </View>

        <Text style={styles.comapniesCountText}>86 Companies</Text>
      </View>

      <View style={styles.footerContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              contentContainerStyle={{ marginTop: 24 }}
              data={jobListData}
              renderItem={({ item }) => <JobItem {...item} />}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View style={styles.firstFeaturedJobsMainContainer}>
            <View style={{ ...styles.feturedJobsTextRow, marginTop: 20 }}>
              <Text style={styles.feauredJobText}>Featured Jobs</Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>
          </View>

          <View style={styles.featuredJobsFirstContainer}>
            <JobCardGoogle
              title={"UX Designer"}
              subtitle={"Google"}
              salary={"$115,000/y"}
              icon={require("../../assets/icons/fiverr.png")}
            />

            <JobCardGoogle
              title={"Jr Executive"}
              subtitle={"Google"}
              salary={"$96,000/y"}
              icon={require("../../assets/icons/linkedIn.png")}
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
    marginTop: 35,
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
  uxDesignIcon: {
    width: 68,
    height: 73,
    marginRight: 16,
  },
  foundJobsText: {
    fontSize: 13,
    fontFamily: "SemiBold",
    color: colors.primaryBlue,
  },
  foundJobsDescription: {
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.primaryBlack,
    marginTop: 12,
  },
  headerJobsView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 24,
  },
  comapniesCountText: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "#95969D",
    position: "absolute",
    right: 24,
    top: 3,
  },
});
