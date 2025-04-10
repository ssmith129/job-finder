import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../../config/colors";

const { width, height } = Dimensions.get("window");
export default function ApplyJobScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ zIndex: 9999 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.arrowBack}
            source={require("../../assets/icons/arrow-back-circle.png")}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Apply</Text>
      </View>

      <View style={styles.headerJobsView}>
        <Image
          style={styles.uxDesignIcon}
          source={require("../../assets/icons/spotify.png")}
        />

        <View>
          <Text style={styles.foundJobsText}>UX Intern</Text>
          <Text style={styles.foundJobsDescription}>Spotify</Text>
        </View>

        <Text style={styles.comapniesCountText}>
          <Text
            style={{
              ...styles.comapniesCountText,
              color: colors.primaryBlack,
              textAlign: "right",
            }}
          >
            $88,000/y
          </Text>{" "}
          {"\n"}Los Angels, US
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text style={styles.trackApplicationtext}>Track Appliction</Text>

          <View style={styles.trackingLineContainer}>
            <Image
              style={styles.trackLine}
              source={require("../../assets/icons/trackLine.png")}
            />

            <View style={styles.trackingRighTextMainContainer}>
              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Offer letter</Text>
                <Text style={styles.trackSubTitle}>Not yet</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Team matching</Text>
                <Text style={styles.trackSubTitle}>29/06/22 02:00 pm</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Final HR interview</Text>
                <Text style={styles.trackSubTitle}>21/06/22 04:00 pm</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Technical interview</Text>
                <Text style={styles.trackSubTitle}>13/06/22 10:00 pm</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Screening interview</Text>
                <Text style={styles.trackSubTitle}>05/06/22 11:00 am</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Reviewed by Spotify team</Text>
                <Text style={styles.trackSubTitle}>25/06/22 09:00 am</Text>
              </View>

              <View style={styles.trackIndividualItem}>
                <Text style={styles.trackTitle}>Application submitted</Text>
                <Text style={styles.trackSubTitle}>17/05/22 11:00 qm</Text>
              </View>
            </View>
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
    marginTop: 25,
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
    width: 40,
    height: 40,
    marginRight: 24,
  },
  foundJobsText: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  foundJobsDescription: {
    fontSize: 13,
    fontFamily: "Regular",
    color: "rgba(98, 98, 98, 0.5)",
    marginTop: 2,
  },
  headerJobsView: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  comapniesCountText: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "rgba(98, 98, 98, 0.5)",
    position: "absolute",
    right: 24,
  },
  selecProfileTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginHorizontal: 24,
    marginTop: 24,
  },
  trackApplicationtext: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginTop: 20,
    marginHorizontal: 24,
    marginBottom: 21,
  },
  trackLine: {
    width: 24,
    height: height / 1.8,
    resizeMode: "contain",
    marginRight: 24,
  },
  trackTitle: {
    fontSize: 14,
    fontFamily: "Medium",
    color: colors.primaryBlack,
    marginBottom: 6,
  },
  trackSubTitle: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "#979797",
  },
  trackIndividualItem: {
    marginBottom: 30,
  },
  trackingLineContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
  },
});
