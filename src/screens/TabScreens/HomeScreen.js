import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import JobCard from "../../components/JobCard";
import JobItem from "../../components/JobItem";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    navigation.navigate("SearchScreen");
  };

  const jobData = [
    {
      id: "1",
      title: "Software Engineer",
      company: "Facebook",
      backgroundImage: require("../../assets/images/blueBack.png"),
      companyIcon: require("../../assets/icons/faceBookIcon.png"),
      tags: ["IT", "Full-Time", "Junior"],
      salary: "$180,000/year",
      location: "California, USA",
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "Google",
      backgroundImage: require("../../assets/images/darkBlueBack.png"),
      companyIcon: require("../../assets/icons/googleIcon.png"),
      tags: ["Design", "Full-Time", "Junior"],
      salary: "$160,000/year",
      location: "Texas, USA",
    },
  ];

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
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeHeader}>
        <Image
          style={styles.logoHome}
          source={require("../../assets/icons/logojobfinder.png")}
        />

        <View style={styles.headerRightContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationsScreen")}
          >
            <Image
              style={styles.notificationIcon}
              source={require("../../assets/icons/notificationIcon.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.notificationIcon}
              source={require("../../assets/icons/profileAvatar.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View style={styles.filterContainer}>
          <TouchableOpacity
            onPress={handleSearch}
            style={styles.searchContainer}
          >
            <View style={styles.icon}>
              <Image
                source={require("../../assets/icons/searchIcon.png")}
                style={styles.image}
              />
            </View>

            <TextInput
              editable={false}
              style={styles.input}
              placeholder="Search a job or position"
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("FilterScreen")}
            style={styles.filterIcon}
          >
            <Image
              style={{ width: 26, height: 26 }}
              source={require("../../assets/icons/filterIcon.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.featuredJobsMainContainer}>
          <View style={styles.featuredJobstTextContainer}>
            <Text style={styles.featuredJobText}>Featured Jobs</Text>

            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              contentContainerStyle={{
                marginLeft: 24,
                marginTop: 20,
                paddingRight: 30,
              }}
              data={jobData}
              renderItem={({ item }) => <JobCard job={item} />}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View>
            <View style={styles.featuredJobstTextContainer}>
              <Text style={styles.featuredJobText}>Popular Jobs</Text>

              <TouchableOpacity>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>

            <View>
              <FlatList
                contentContainerStyle={{ marginTop: 24 }}
                data={jobListData}
                renderItem={({ item }) => <JobItem {...item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoHome: {
    width: 121,
    height: 32,
  },
  notificationIcon: {
    width: 32,
    height: 32,
    marginRight: 14,
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 16,
    marginTop: 38,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: colors.serachGray,
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 15,
    minHeight: 48,
    width: width / 1.4,
    zIndex: 999999,
  },
  icon: {
    paddingRight: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filterIcon: {
    width: 48,
    height: 48,
    backgroundColor: colors.serachGray,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
  },
  featuredJobstTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 32,
  },
  featuredJobText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: "Medium",
    color: colors.darkgray,
  },
});
