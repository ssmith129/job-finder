import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

const SelectProfileCard = ({
  userName,
  jobTitle,
  avatarUri,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
    >
      <Image source={avatarUri} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.jobTitle}>
          {jobTitle}{" "}
          <Image
            style={{ width: 9, height: 9 }}
            source={require("../assets/icons/blueCheckMark.png")}
          />
        </Text>
      </View>
      {
        <AntDesign
          name={isSelected ? "checkcircle" : "checkcircleo"}
          size={20}
          color={colors.primaryBlue}
          style={styles.checkIcon}
        />
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 4,
    elevation: 2,
    width: width / 2.4,
  },
  cardSelected: {},
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 40,
    marginBottom: 8,
  },
  userInfo: {
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontFamily: "SemiBold",
    marginBottom: 5,
    color: colors.primaryBlack,
  },
  jobTitle: {
    fontSize: 10,
    color: "#64676D",
    fontFamily: "Regular",
  },
  checkIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default SelectProfileCard;
