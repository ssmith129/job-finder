import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import { SectionList } from "react-native";
import NotificationItem from "../../components/NotificationItem";

export default function NotificationsScreen({ navigation }) {
  const sections = [
    {
      title: "New activity",
      data: [
        {
          id: "1",
          icon: require("../../assets/icons/fiverr.png"),
          message:
            "Fiverr want to take a final interview of you where head of HR will see you!",
          time: "12 min ago •",
        },
      ],
    },
    {
      title: "Applications",
      data: [
        {
          id: "2",
          icon: require("../../assets/icons/bmw.png"),
          message:
            "Your application is submitted successfully to BMW. You can check the status here.",
          time: "1 hr ago",
        },
        {
          id: "3",
          icon: require("../../assets/icons/bookingcom.png"),
          message:
            "Booking.com reviewing your applicatin, cover letter and portfolio. All the best!",
          time: "3 hrs ago",
        },
      ],
    },
    {
      title: "Interview",
      data: [
        {
          id: "2",
          icon: require("../../assets/icons/beatsIcon.png"),
          message:
            "Congratulations! Beats liked your resume and want to take an interview of you.",
          time: "4 hrs ago",
        },
        {
          id: "3",
          icon: require("../../assets/icons/behance.png"),
          message:
            "Congratulations! You passed the first round on Behance. Be prepare for next!",
          time: "6 hrs ago",
        },
      ],
    },
  ];
  const renderHeader = ({ section: { title } }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.sectionHeader}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            /* handle 'See all' press */
          }}
        >
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item, section }) => {
    const textColor =
      section.title === "New activity" ? colors.primaryBlack : "#666";
    return <NotificationItem {...item} color={textColor} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.notificationHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../assets/icons/arrow-back.png")}
            style={styles.arrowBack}
          />
        </TouchableOpacity>

        <Text style={styles.notificationText}>Notifications</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/settingsIcon.png")}
            style={styles.arrowBack}
          />
        </TouchableOpacity>
      </View>

      <View>
        <SectionList
          contentContainerStyle={{ marginTop: 15, paddingBottom: 100 }}
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          stickySectionHeadersEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  arrowBack: {
    width: 42,
    height: 42,
  },
  notificationText: {
    fontSize: 16,
    fontFamily: colors.naturalText,
    fontFamily: "Bold",
  },
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  sectionHeader: {
    fontFamily: "SemiBold",
    fontSize: 14,
    color: colors.primaryBlack,
  },
  seeAllText: {
    fontSize: 13,
    color: colors.darkGray2,
    fontFamily: "Medium",
  },
});
