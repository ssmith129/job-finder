import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../config/colors";

const { width } = Dimensions.get("window");
const FilterScreen = ({ navigation }) => {
  const [salaryRange, setSalaryRange] = useState([72000, 120000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("any");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSearchSubmit = () => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color={colors.primaryBlack} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <TouchableOpacity>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
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
      <View style={styles.tagContainer}>
        {["Google", "Meta", "Amazon", "Apple", "Microsoft", "Netflix"].map(
          (tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
              <TouchableOpacity>
                <AntDesign name="close" size={14} color={colors.primaryBlue} />
              </TouchableOpacity>
            </View>
          )
        )}
      </View>

      <View style={styles.seprator} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Salary Range</Text>
        <Text style={styles.sectionSubtitle}>
          The average listing price is $84,000
        </Text>

        <View style={styles.sliderLabels}>
          <Text style={styles.sliderLabelText}>
            ${salaryRange[0].toFixed(0)}
          </Text>
          <Text style={styles.sliderLabelText}>
            ${salaryRange[1].toFixed(0)}
          </Text>
        </View>
        
        <Slider
          value={salaryRange}
          onValueChange={setSalaryRange}
          minimumValue={50000}
          maximumValue={200000}
          step={1000}
          thumbTintColor={colors.primaryBlue}
          minimumTrackTintColor={colors.primaryBlue}
          maximumTrackTintColor={colors.primaryBlue}
          trackStyle={{ backgroundColor: "#E4E5E7", height: 2 }}
        />

        <View style={styles.experinceLocationMainContainer}>
          <View style={styles.expericeContainer}>
            <Text style={styles.expericenLeveltext}>Experience Level</Text>
            <Text style={styles.experinceLevel}>Entry Level, Mid Le....</Text>
            <Image
              style={styles.editFilterIcon}
              source={require("../../assets/icons/editFilter.png")}
            />
          </View>

          <View style={{ ...styles.seprator, marginVertical: 24 }} />

          <View style={styles.expericeContainer}>
            <Text style={styles.expericenLeveltext}>Location</Text>
            <Text style={styles.experinceLevel}>
              Los Angels, San Jose, San F....
            </Text>
            <Image
              style={styles.editFilterIcon}
              source={require("../../assets/icons/editFilter.png")}
            />
          </View>

          <View style={{ ...styles.seprator, marginVertical: 24 }} />

          <View>
            <Text style={styles.sectionTitle}>Job Types</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.jobTypesScrollContainer}
            >
              {["Any", "Full-Time", "Contract", "Part-Time"].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.jobTypeButton,
                    selectedJobType === type.toLowerCase() &&
                      styles.jobTypeButtonSelected,
                  ]}
                  onPress={() => setSelectedJobType(type.toLowerCase())}
                >
                  <Text
                    style={[
                      styles.jobTypeText,
                      selectedJobType === type.toLowerCase() &&
                        styles.jobTypeTextSelected,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Platform.OS==='android' ?0:21,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 13,
    color: colors.lightblue,
    fontFamily: "SemiBold",
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
    borderColor: colors.borderGray,
    borderRadius: 12,
    paddingHorizontal: 30,
    marginHorizontal: Platform.OS=== 'ios'?24:0,
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
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 14,
    paddingHorizontal: Platform.OS==='android'?0:21,
    marginTop: 16,
  
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#D9E6F2",
    borderRadius: 97,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexBasis: '30%', 
    flexGrow: 1, 
    marginRight: 8,
    marginBottom: 16,
    maxHeight:37,
  },
  tagText: {
    fontSize: 14,
    fontFamily: "Medium",
    marginRight: 4,
  },

  section: {
    padding:Platform.OS==='android' ?0: 24,
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "Medium",
    marginBottom: 8,
    color: "#95969D",
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#95969D",
    marginBottom: 36,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sliderLabelText: {
    fontSize: 17,
    color: colors.primaryBlack,
    fontFamily: "SemiBold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    margin: 16,
    borderRadius: 30,
    backgroundColor: "#007bff",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  seprator: {
    backgroundColor: "#E4E5E7",
    height: 1,
    width: width - 40,
    opacity: 0.5,
    alignSelf: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
  experinceLocationMainContainer: {
    marginTop: 48,
  },
  expericeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expericenLeveltext: {
    fontSize: 15,
    fontFamily: "Medium",
    color: "#95969D",
  },
  experinceLevel: {
    fontSize: 14,
    fontFamily: "Medium",
    color: colors.primaryBlack,
  },
  editFilterIcon: {
    width: 20,
    height: 20,
  },
  jobTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  jobTypeButton: {
    backgroundColor: "#f0f0f5",
    borderRadius: 97,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 90,
    minHeight: 37,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginTop: 10,
    marginBottom: 59,
  },
  jobTypeButtonSelected: {
    backgroundColor: colors.primaryBlue,
  },
  jobTypeText: {
    fontSize: 14,
    fontFamily: "Medium",
    color: "#62636A",
  },
  jobTypeTextSelected: {
    color: colors.white,
  },
});

export default FilterScreen;
