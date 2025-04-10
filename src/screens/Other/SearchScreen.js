import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [popularRoles, setPopularRoles] = useState([
    "Designer",
    "Administrate",
    "NGO",
    "Manager",
    "Management",
    "IT",
    "Marketing",
    "Developer",
    "SEO",
  ]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {
    // Navigate to SearchResultsScreen with roles as parameter
    navigation.navigate("SearchResultScreen", { roles: popularRoles });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color={colors.primaryBlack} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
        <View style={{ width: 42 }} />
      </View>
      <View style={styles.searchBoxContainer}>
        <AntDesign name="search1" size={20} color="#AFB0B6" />
        <TextInput
          style={styles.searchBox}
          value={searchQuery}
          onChangeText={handleSearchChange}
          onSubmitEditing={handleSearchSubmit}
          placeholder="Search a job or position"
          returnKeyType="search"
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Recent Searches</Text>
        <Text style={styles.regularText}>
          You don't have any search history
        </Text>
        <Text style={{ ...styles.sectionTitle, marginBottom: 16 }}>
          Popular Roles
        </Text>
        <View style={styles.popularRolesContainer}>
          {popularRoles.map((role) => (
            <TouchableOpacity 
            onPress={handleSearchSubmit}
            key={role} style={styles.roleItem}>
              <Text style={styles.roleText}>{role}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 10,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
  },
  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    borderRadius: 5,
    paddingHorizontal: 30,
    marginHorizontal: 24,
    minHeight: 50,
    marginTop: 40,
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
  },
  scrollView: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "SemiBold",
    marginTop: 39,
    marginBottom: 10,
    color: colors.naturalText,
  },
  regularText: {
    fontSize: 12,
    color: colors.graynite,
    fontFamily: "Regular",
  },
  popularRolesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  roleItem: {
    minHeight: 37,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 13,
    width: "29%",
    marginHorizontal: "1.333%",
    alignItems: "center",
    justifyContent: "center",
  },
  roleText: {
    fontSize: 13,
    fontFamily: "Regular",
    color: colors.primaryBlack,
  },
});

export default SearchScreen;
