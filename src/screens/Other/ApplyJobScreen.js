import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import SelectProfileCard from "../../components/SelectProfileCard";
import ResumeSelectionCard from "../../components/ResumeSelectionCard";
import CustomButton from "../../components/CustomButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";

const { width } = Dimensions.get("window");
export default function ApplyJobScreen({ navigation }) {
  const [selectedUserId, setSelectedUserId] = useState("1");
  const [letter, setLetter] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleApplyPress = () => {
    setModalVisible(true);
  };

  const handleCardPress = (userId) => {
    setSelectedUserId(userId);
  };

  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardPress2 = (id) => {
    setSelectedCardId(id);
  };
  const users = [
    {
      id: "1",
      name: "Haley Jessica",
      jobTitle: "UX Designer",
      avatarUri: require("../../assets/icons/selectProfile1.png"),
    },
    {
      id: "2",
      name: "Haley Jessica",
      jobTitle: "UX Designer",
      avatarUri: require("../../assets/icons/selectProfile2.png"),
    },
  ];

  const cardData = [
    {
      id: "1",
      title: "UX Designer",
      name: "Haley Jessica",
      jobColor: "#356899",
    },
    {
      id: "2",
      title: "Product Designer",
      name: "Haley Jessica",
      jobColor: "#FE6D73",
    },
  ];


  const onPressTrackJob = () =>
  {
    setModalVisible(false)
    navigation.navigate('ApplicationTrackingScreen')
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
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
                textAlign:'right'
                
              }}
            >
              $88,000/y
            </Text>{" "}
            {"\n"}Los Angels, US
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.selecProfileTitle}>Select a profile</Text>

          <View style={styles.selectProfileCardContainer}>
            {users.map((user) => (
              <SelectProfileCard
                key={user.id}
                userName={user.name}
                jobTitle={user.jobTitle}
                avatarUri={user.avatarUri}
                isSelected={selectedUserId === user.id}
                onPress={() => handleCardPress(user.id)}
              />
            ))}
          </View>

          <Text
            style={{
              ...styles.selecProfileTitle,
              marginTop: 32,
              marginBottom: 10,
            }}
          >
            Select a resume
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              paddingHorizontal: 10,
            }}
          >
            {cardData.map((card) => (
              <ResumeSelectionCard
                jobColor={card.jobColor}
                key={card.id}
                title={card.title}
                name={card.name}
                isSelected={selectedCardId === card.id}
                onPress={() => handleCardPress2(card.id)}
              />
            ))}
          </View>

          <Text
            style={{
              ...styles.selecProfileTitle,
              marginTop: 32,
              marginBottom: 10,
            }}
          >
            Cover Letter{" "}
            <Text
              style={{
                ...styles.selecProfileTitle,
                color: "#95969D",
                fontFamily: "Regular",
              }}
            >
              (Optional)
            </Text>
          </Text>

          <View style={styles.coverLetterMainContainer}>
            <TextInput
              returnKeyType="next"
              placeholder="Write a cover letter......"
              style={styles.coverLetterInput}
              value={letter}
              onChangeText={setLetter}
              multiline
            />

            <View style={styles.uploadIconContainer}>
              <Image
                style={styles.uploadIcon}
                source={require("../../assets/icons/uploadIcon.png")}
              />

              <Text style={styles.uploadFileText}>
                Upload{"\n"}
                File
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 24 }}>
            <CustomButton
              onPress={() => setModalVisible(true)}
              title={"Apply"}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <Modal
      backdropOpacity={0.5}
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modalContainer}
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <View style={styles.modalView}>
            <View style={styles.handle} />
            <Image
              source={require("../../assets/icons/applySuccessIcon.png")}
              style={styles.modalIcon}
            />
            <Text style={styles.modalTitle}>Applied Successfully</Text>
            <Text style={styles.modalMessage}>
              You have successfully applied for a job. Please wait for a reply
              from the recruitment team to answer. Good Luck! 😉
            </Text>

            <CustomButton
            onPress={onPressTrackJob}
            title="Track Job" />

            <TouchableOpacity style={styles.browseJobsButton}>
              <Text style={styles.browseJob}>Browse Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  selectProfileCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    marginTop: 16,
  },
  coverLetterInput: {
    width: width / 1.5,
    backgroundColor: colors.white,
    height: 89,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 14,
    color: "#AFB0B6",
    fontFamily: "Regular",
    marginRight: 16,
  },
  uploadIcon: {
    width: 16,
    height: 16,
  },
  uploadIconContainer: {
    width: 68,
    height: 89,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadFileText: {
    fontSize: 10,
    fontFamily: "Regular",
    color: "#356899",
    textAlign: "center",
    marginTop: 9,
  },
  coverLetterMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },

  modalIcon: {
    marginBottom: 44,
    width: 130,
    height: 130,
  },
  modalTitle: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 18,
    fontFamily: "SemiBold",
  },
  modalMessage: {
    marginBottom: 55,
    textAlign: "center",
    fontSize: 14,
    color: "#979797",
    fontFamily: "Regular",
  },
  handle: {
    width: 51,
    height: 8,
    backgroundColor: "#F3F3F3",
    marginBottom: 38,
  },
  browseJobsButton: {
    width: width - 48,
    height: 56,
    borderWidth: 1,
    borderColor: colors.primaryBlue,
    borderRadius: 12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  browseJob: {
    fontSize: 16,
    fontFamily: "SemiBold",
    color: colors.primaryBlue,
  },
  modalContainer: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
