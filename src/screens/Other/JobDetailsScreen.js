import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";
import SegmentedControl from "../../components/SegmentBar";
import CustomButton from "../../components/CustomButton";

const { width } = Dimensions.get("window");

const activities = [
  {
    id: "1",
    name: "Yoruzawa Nagumo",
    action: "Viewing job summary",
    date: "May 12",
    avatar: require("../../assets/icons/activityProfile1.png"),
  },
  {
    id: "2",
    name: "Courtney Henry",
    action: "Apply the job",
    date: "May 12",
    avatar: require("../../assets/icons/activityProfile3.png"),
  },
  {
    id: "3",
    name: "Brooklyn Simmons",
    action: "Apply the job",
    date: "May 12",
    avatar: require("../../assets/icons/activityProfile2.png"),
  },
  {
    id: "4",
    name: "Arlene McCoy",
    action: "Viewing job summary",
    date: "May 12",
    avatar: require("../../assets/icons/activityProfile1.png"),
  },
];

export default function JobDetailsScreen({ navigation }) {
  const segments = ["Summary", "About", "Activity"];
  const [activeIndex, setActiveIndex] = useState(0);

  const BulletPoint = ({ text }) => (
    <View style={styles.bulletPointItem}>
      <View style={styles.bullet} />
      <Text style={styles.bulletPointText}>{text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBlue}>
        <ImageBackground
          style={styles.headerImageBack}
          source={require("../../assets/images/blueMask.png")}
        >
          <View style={styles.haederTop}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="chevron-back"
              size={28}
              color={colors.white}
            />

            <TouchableOpacity>
              <Image
                style={styles.bookmarkIcon}
                source={require("../../assets/icons/bookmarkWhite.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.faceBookContainer}>
            <Image
              style={styles.faceBookIcon}
              source={require("../../assets/icons/facebookBlue.png")}
            />
          </View>

          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text style={styles.company}>Facebook</Text>
          <Text style={styles.salryLocation}>$180,00/year Seattle, USA</Text>

          <View style={styles.comapnyTagmainContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Design</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Full-Time</Text>
            </View>

            <View style={styles.tag}>
              <Text style={styles.tagText}>Junior</Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <SegmentedControl
        segments={segments}
        selectedIndex={activeIndex}
        onSelect={setActiveIndex}
      />

      {activeIndex === 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
        >
          <Text style={styles.header}>Job Description</Text>
          <Text style={styles.content}>
            Senior UI/UX Designer needed, for collaborate with team and
            developer as full time designer. Then having good communication,{" "}
            <Text style={styles.readMore}>Read More...</Text>
          </Text>

          <Text style={styles.header}>Responsibilities</Text>
          <View style={styles.bulletPointContainer}>
            <BulletPoint text="Collaborate with product manager and teach throughout the design life-cycle such as product wireframes" />
            <BulletPoint text="Design new product, new interfaces and experience." />
            <BulletPoint text="Create a design theme that promotes a strong brand affiliation." />
            <BulletPoint text="Hands-on experience with creating short videos and editing" />
          </View>

          <Text style={styles.header}>Requirements</Text>
          <View style={styles.bulletPointContainer}>
            <BulletPoint text="On-site in California" />
            <BulletPoint text="Have good communication skills and team working skill." />
            <BulletPoint text="Know the principal of animation and you can create high quality prototypes." />
            <BulletPoint text="Figma, Xd & Sketch know about this app." />
          </View>

          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <CustomButton 
            onPress={()=>navigation.navigate('ApplyJobScreen')}
            title={"Apply Now"} />
          </View>
        </ScrollView>
      )}

      {activeIndex === 1 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Text style={styles.header}>About Company</Text>
          <Text style={styles.paragraph}>
            Pinterest is a visual discovery engine for finding ideas like
            recipes, home and style inspiration, and more.
          </Text>
          <Text style={styles.paragraph}>
            With billions of Pins on Pinterest, you'll always find ideas to
            spark inspiration. When you discover Pins you love, save them to
            boards to keep your ideas organized and easy to find. You can also
            create Pins to share your ideas with other people on Pinterest.
          </Text>

          <Text style={{ ...styles.header, marginBottom: 25, marginTop: 20 }}>
            Contact
          </Text>
          <View style={styles.contactItem}>
            <Image
              source={require("../../assets/icons/callOrange.png")}
              style={styles.icon}
            />
            <Text style={styles.contactText}>(01) 555-0120</Text>
          </View>
          <View style={styles.contactItem}>
            <Image
              source={require("../../assets/icons/emailOrange.png")}
              style={styles.icon}
            />
            <Text style={styles.contactText}>cs.facebook@mail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Image
              source={require("../../assets/icons/locationOrange.png")}
              style={styles.icon}
            />
            <Text style={styles.contactText}>
              3517 W. Gray St. Utica, Pennsylvania{"\n"}57867
            </Text>
          </View>

          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <CustomButton 
            onPress={()=>navigation.navigate('ApplyJobScreen')}

            title={"Apply Now"} />
          </View>
        </ScrollView>
      )}

      {activeIndex === 2 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Text style={styles.header}>Recent Activities</Text>
          <FlatList
            contentContainerStyle={{ marginTop: 10 }}
            data={activities}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.activityItem}>
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.action}>{item.action}</Text>
                </View>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            )}
          />
          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <CustomButton
            onPress={()=>navigation.navigate('ApplyJobScreen')}
            title={"Apply Now"} />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerBlue: {
    width: width,
    height: 318,
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  headerImageBack: {
    width: width,
    height: 318,
    resizeMode: "contain",
  },
  bookmarkIcon: {
    width: 23,
    height: 23,
    tintColor: colors.white,
  },
  haederTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 20,
  },
  faceBookContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors.white,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  faceBookIcon: {
    width: 40,
    height: 40,
  },
  jobTitle: {
    fontSize: 24,
    fontFamily: "Bold",
    color: colors.white,
    textAlign: "center",
    marginTop: 12,
  },
  company: {
    fontSize: 16,
    fontFamily: "Medium",
    color: colors.white,
    textAlign: "center",
    marginTop: 2,
    opacity: 0.75,
  },
  salryLocation: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.white,
    textAlign: "center",
    marginTop: 8,
  },
  comapnyTagmainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  tag: {
    paddingHorizontal: 16,
    height: 26,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginRight: 26,
  },
  tagText: {
    fontSize: 11,
    fontFamily: "Regular",
    color: colors.white,
  },
  header: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: "#2C3131",
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: "#979797",
    fontFamily: "Regular",
    marginBottom: 20,
    marginHorizontal: 24,
    lineHeight: 20,
  },

  bulletPointContainer: {
    flexDirection: "column",
  },
  bulletPointItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
    marginHorizontal: 24,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 8,
    backgroundColor: "#3860E2",
    marginTop: 10,
    marginRight: 10,
  },
  bulletPointText: {
    flex: 1,
    fontSize: 14,
    color: "#979797",
    lineHeight: 24,
    fontFamily: "Regular",
  },
  readMore: {
    color: "#3860E2",
    fontFamily: "Medium",
    fontSize: 14,
  },
  //About
  paragraph: {
    fontSize: 14,
    color: "#979797",
    marginBottom: 16,
    fontFamily: "Regular",
    marginHorizontal: 24,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    marginHorizontal: 24,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  contactText: {
    fontSize: 14,
    color: "#979797",
    fontFamily: "Regular",
  },

  //Recent Activities
  activityItem: {
    flexDirection: "row",
    marginBottom: 30,
    marginHorizontal: 24,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 25,
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  action: {
    fontSize: 12,
    color: "#979797",
    marginTop: 6,
    fontFamily: "Regular",
  },
  date: {
    fontSize: 11,
    color: "#A9A9A9",
    fontFamily: "Regular",
  },
});
