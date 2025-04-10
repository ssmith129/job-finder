import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import JobItem from "../../components/JobItem";
const { width } = Dimensions.get("window");
export default function SearchResultScreen({ route }) {
  const { role } = route.params;
  const jobListData = [
    {
      id: "1",
      title: "Jr Executive",
      company: "Burger King",
      salary: "$96,000/y",
      location: "Los Angeles, US",
      companyIcon: require("../../assets/icons/burgerKingIcon.png"),
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Beats",
      salary: "$84,000/y",
      location: "Florida, US",
      companyIcon: require("../../assets/icons/beatsIcon.png"),
    },
    {
        id: "3",
        title: "UX Designer 1.3",
        company: "Fiat",
        salary: "$84,000/y",
        location: "Florida, US",
        companyIcon: require("../../assets/icons/fiat.png"),
      },
      {
        id: "4",
        title: "UX Designer",
        company: "Fiat",
        salary: "$84,000/y",
        location: "Florida, US",
        companyIcon: require("../../assets/icons/fiat.png"),
      },
      {
        id: "5",
        title: "UX Designer 1.5",
        company: "Booking.com",
        salary: "$84,000/y",
        location: "Florida, US",
        companyIcon: require("../../assets/icons/b.png"),
      },
      {
        id: "5",
        title: "UX Designer",
        company: "Wordpress",
        salary: "$84,000/y",
        location: "Florida, US",
        companyIcon: require("../../assets/icons/b.png"),
      },
      {
        id: "5",
        title: "UX Designer 1.7",
        company: "Sppotify",
        salary: "$84,000/y",
        location: "Florida, US",
        companyIcon: require("../../assets/icons/spotify.png"),
      },
  ];
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.arrowBack}
          source={require("../../assets/icons/arrow-back-circle.png")}
        />

        <View>
          <Text style={styles.role}>UX Designer</Text>
          <View style={styles.topSeprator} />
        </View>

        <TouchableOpacity
          style={{ position: "absolute", right: 34, zIndex: 9999 }}
        >
          <AntDesign name="close" size={24} color="#AFB0B6" />
        </TouchableOpacity>
      </View>
      <View style={styles.jobFoundContainer}>
        <Text style={styles.jobsFoundTextr}>293 Jobs Found</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/customSwitch.png")}
            style={styles.swicthImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
      <View>
      <FlatList
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 24 ,paddingBottom:100}}
        data={jobListData}
        renderItem={({ item }) => <JobItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
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
  inputDisablesContainer: {
    borderBottomWidth: 1,
    width: width - 48,
    height: 1,
    backgroundColor: "#C4C4C4",
  },
  role: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  topSeprator: {
    width: width / 1.37,
    backgroundColor: "#C4C4C4",
    height: 1,
    marginTop: 11,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 24,
    marginTop: 24,
  },
  jobFoundContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 35,
    paddingHorizontal: 24,
  },
  jobsFoundTextr: {
    fontSize: 12,
    fontFamily: "SemiBold",
    color: "#0A0D13",
  },
  swicthImage: {
    width: 72,
    height: 40,
  },
  footerContainer: {
    width: width,
    flex: 1,
    backgroundColor: "#FAFAFD",
    marginTop: 40,
  },
});
