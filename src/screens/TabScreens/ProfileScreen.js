import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");

const numColumns = 3;
const size = Dimensions.get("window").width / numColumns;
export default function ProfileScreen({ navigation }) {
  const images = [
    { id: "1", uri: require("../../assets/images/portfolio1.png") },
    { id: "2", uri: require("../../assets/images/portfolio2.png") },
    { id: "3", uri: require("../../assets/images/portfolio3.png") },
    { id: "4", uri: require("../../assets/images/portfolio4.png") },
    { id: "5", uri: require("../../assets/images/portfolio5.png") },
    { id: "6", uri: require("../../assets/images/portfolio6.png") },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.5} style={styles.itemContainer}>
      <Image source={item.uri} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowBack}
              source={require("../../assets/icons/arrow-back-circle.png")}
            />
          </TouchableOpacity>

          <Text style={styles.editText}>Edit</Text>
        </View>

        <View style={styles.profileDetailContainer}>
          <Image
            style={styles.profileAvatar}
            source={require("../../assets/icons/profileAvatar.png")}
          />

          <Text style={styles.profileName}>Haley Jessica</Text>

          <View style={styles.jobPostContainer}>
            <Text style={styles.jobTitle}>Haley Jessica</Text>

            <Image
              style={styles.blueCheckMark}
              source={require("../../assets/icons/blueCheckMark.png")}
            />
          </View>

          <View style={styles.jobsApplyInterviewMainContainer}>
            <View>
              <Text style={styles.numberAppliedTitle}>35</Text>
              <Text style={styles.numberAppliedSubtitle}>Applied</Text>
            </View>

            <View>
              <Text style={styles.numberAppliedTitle}>19</Text>
              <Text style={styles.numberAppliedSubtitle}>Reviewed</Text>
            </View>

            <View>
              <Text style={styles.numberAppliedTitle}>10</Text>
              <Text style={styles.numberAppliedSubtitle}>Interveiw</Text>
            </View>
          </View>

          <View style={styles.smallResumeContainer}>
            <View style={styles.resumeTitleRow}>
              <Text style={styles.resumeTitle}>Resume</Text>
              <TouchableOpacity
              onPress={()=>navigation.navigate('UploadResumeScreen')}
              >
                <Text style={styles.resumeSubTitle}>Make a resume</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.smallresumeBackgroundContainer}>
              <View style={styles.resumeHeader}>
                <View style={styles.cvBox}>
                  <Text style={styles.cvText}>cv</Text>
                </View>

                <View>
                  <Text style={styles.resumeName}>Haley Jessica</Text>
                  <Text style={styles.resumeJobTitle}>UX Designer</Text>
                </View>

                <View
                  style={{
                    ...styles.cvBox,
                    backgroundColor: colors.primaryBlue,
                  }}
                >
                  <Text style={styles.cvText}>PDF</Text>
                </View>
              </View>

              <Text style={styles.resumeText}>
                Creative UX Designer with 6+ years of experience in optimizing
                user experience through innovative solutions and dynamic
                interface designs. Successful in enhancing user engag-ement for
                well-known brands, providing a compelling user experience to
                improve brand loyalty and customer retention.
              </Text>
            </View>

            <View style={styles.resumeTitleRow}>
              <Text style={styles.resumeTitle}>Experience</Text>
              <TouchableOpacity>
                <Text style={{ ...styles.resumeSubTitle, color: "#979797" }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...styles.smallresumeBackgroundContainer,
                paddingVertical: 16,
              }}
            >
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
                      lineHeight: 22,
                    }}
                  >
                    San Jose, US
                  </Text>{" "}
                  {"\n"}Dec 20 - Feb 21
                </Text>
              </View>
            </View>

            <View style={styles.resumeTitleRow}>
              <Text style={styles.resumeTitle}>Portfolio</Text>
              <TouchableOpacity>
                <Text style={{ ...styles.resumeSubTitle, color: "#979797" }}>
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                contentContainerStyle={{ marginTop: 9, paddingHorizontal: 10 }}
                data={images}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                style={styles.container}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {},
  arrowBack: {
    width: 42,
    height: 42,
  },
  editText: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: "#AFB0B6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 20,
  },

  profileAvatar: {
    width: 103,
    height: 103,
    alignSelf: "center",
  },
  profileName: {
    fontSize: 22,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    textAlign: "center",
    marginTop: 10,
  },
  blueCheckMark: {
    width: 12,
    height: 12,
  },
  jobPostContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "#95969D",
    marginRight: 4,
  },
  numberAppliedTitle: {
    fontSize: 16,
    fontFamily: "Bold",
    color: colors.primaryBlack,
    marginBottom: 8,
    textAlign: "center",
  },
  numberAppliedSubtitle: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "#CACACA",
    textAlign: "center",
  },
  jobsApplyInterviewMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 36,
  },

  resumeTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 39,
  },
  resumeTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "#2C3131",
  },
  resumeSubTitle: {
    fontSize: 12,
    fontFamily: "Regular",
    color: "#356899",
  },
  smallresumeBackgroundContainer: {
    width: width - 48,
    backgroundColor: colors.white,
    alignSelf: "center",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 12,
  },
  resumeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cvBox: {
    height: 14,
    borderRadius: 6,
    backgroundColor: "#5386E4",
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  cvText: {
    fontSize: 8,
    fontFamily: "Medium",
    color: colors.white,
  },
  resumeName: {
    fontSize: 11,
    fontFamily: "Bold",
    color: colors.primaryBlack,
    marginBottom: 2,
  },
  resumeJobTitle: {
    fontSize: 8,
    color: "#95969D",
    fontFamily: "Regular",
    textAlign: "center",
  },
  resumeText: {
    fontSize: 7,
    fontFamily: "Regular",
    color: "#95969D",
    marginTop: 10,
  },
  headerJobsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  uxDesignIcon: {
    width: 43,
    height: 43,
    marginRight: 16,
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
  comapniesCountText: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "rgba(98, 98, 98, 0.5)",
    position: "absolute",
    right: 0,
  },
  selecProfileTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginHorizontal: 24,
    marginTop: 24,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 16,
    paddingHorizontal: 15,
  },
  image: {
    height: 98,
    width: 98,
  },
});
