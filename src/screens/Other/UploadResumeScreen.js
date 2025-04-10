import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import colors from "../../config/colors";
import CustomButton from "../../components/CustomButton";

const { width } = Dimensions.get("window");
const buttonWidth = width / 2 - 30;
export default function UploadResumeScreen({ navigation }) {
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View>
          <Text style={styles.resumeCvText}>Resume or CV</Text>
        </View>

        <View style={styles.uploadDotsContainer}>
          <Text style={styles.uploadCvText}>
            Upload your CV or Resume and{"\n"}use it when you apply for jobs
          </Text>

          <View style={styles.uploadButton}>
            <Text style={styles.uploadbtnText}>Upload a Doc/Docx/PDF</Text>
          </View>

          <TouchableOpacity style={styles.uploadBlueButton}>
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ ...styles.resumeCvText, marginBottom: 20 }}>
            Portfolio{" "}
            <Text style={{ ...styles.resumeCvText, color: "#AFB0B6" }}>
              (Optional)
            </Text>
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Portfolio Link</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add Slide</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add PDF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add Photos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton title={"Save"} />
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
  resumeCvText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    marginHorizontal: 24,
    marginTop: 24,
  },
  uploadDotsContainer: {
    width: width - 48,
    height: 315,
    borderRadius: 24,
    alignSelf: "center",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#356899",
    marginTop: 24,
  },
  uploadCvText: {
    fontSize: 13,
    fontFamily: "Medium",
    color: "#95969D",
    textAlign: "center",
    marginTop: 40,
  },
  uploadButton: {
    width: width - 112,
    height: 73,
    backgroundColor: "#F2F2F3",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadbtnText: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "#658EFF",
  },
  uploadBlueButton: {
    width: width - 152,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryBlue,
    alignSelf: "center",
    marginTop: 32,
  },
  uploadText: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.white,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  button: {
    width: buttonWidth,
    borderWidth: 1,
    borderColor: colors.primaryBlack,
    borderRadius: 10,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: colors.primaryBlack,
    fontFamily: "Medium",
    fontSize: 14,
  },
  btnContainer: {
    marginTop: 40,
  },
});
