import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
const { width } = Dimensions.get("window");

const ResumeSelectionCard = ({
  title,
  name,
  isSelected,
  onPress,
  jobColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, isSelected && styles.cardSelected]}
    >
      <View style={styles.checkmarkContainer}>
        {
          <AntDesign
            name={isSelected ? "checkcircle" : "checkcircleo"}
            size={20}
            color={colors.primaryBlue}
          />
        }
      </View>
      <View style={styles.textContainer}>
        <View style={{ ...styles.titleContainer, backgroundColor: jobColor }}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    padding: 8,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 8,
    width: width / 2.4,
  },
  checkmarkContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: colors.white,
    fontSize: 8,
    fontFamily: "Mediumn",
  },
  name: {
    color: colors.primaryBlack,
    fontSize: 11,
    fontFamily: "SemiBold",
    textAlign: "center",
  },
  cardSelected: {
    
  },
  titleContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#356899",
    minHeight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 8,
  },
});

export default ResumeSelectionCard;
