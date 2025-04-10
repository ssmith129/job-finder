import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    title: "Companies",
    data: [
      {
        id: "1",
        name: "Google",
        message: "Are you available for an interview...",
        time: "11:45 am",
        unread: 4,
        avatarUri: require("../../assets/icons/google.png"),
      },
      {
        id: "2",
        name: "HP",
        message: "We are looking forward to takin.....",
        time: "11:45 am",
        unread: 4,
        avatarUri: require("../../assets/icons/hp.png"),
      },
      {
        id: "3",
        name: "Spotify",
        message: "Are you available for an interview...",
        time: "11:45 am",
        unread: 1,
        avatarUri: require("../../assets/icons/spotify.png"),
      },
    ],
  },
  {
    title: "Individual Messages",
    data: [
      {
        id: "4",
        name: "Erik John",
        message: "We are looking for a web developer...",
        time: "11:45 am",
        unread: 7,
        avatarUri: require("../../assets/icons/activityProfile1.png"),
      },
      {
        id: "5",
        name: "Nicolas Pooran",
        message: "Nice to meet u👋🏻",
        time: "11:45 am",
        unread: 7,
        avatarUri: require("../../assets/icons/activityProfile2.png"),
      },
      {
        id: "6",
        name: "Nicolas Pooran",
        message: "Hi bro, I’m on the way to your home...",
        time: "11:45 am",
        unread: 7,
        avatarUri: require("../../assets/icons/activityProfile3.png"),
      },
      {
        id: "7",
        name: "Rowling Kint",
        message: "Are you available for today interview...",
        time: "11:45 am",
        unread: 7,
        avatarUri: require("../../assets/icons/activityProfile1.png"),
      },
    ],
  },
];

export default function MessagesScreen({navigation}) {
  const handleSearchSubmit = () => {};

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('MessagesRoomDetailScreen', {
      name: item.name,
      avatarUri: item.avatarUri,
    })}
    activeOpacity={0.5} style={styles.messageItem}>
      <Image style={styles.avatar} source={item.avatarUri} />
      <View style={styles.messageContent}>
        <Text style={styles.messageName}>{item.name}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
      <View style={styles.messageMeta}>
        <Text style={styles.messageTime}>{item.time}</Text>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>{item.unread}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{ ...styles.messageText, fontFamily: "Bold", fontSize: 16 }}
        >
          Messages
        </Text>
        <Image
          style={styles.writeMessageAvatar}
          source={require("../../assets/icons/writeMessageicon.png")}
        />
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

      <View>
        <SectionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 150 }}
          stickySectionHeadersEnabled={false}
          sections={DATA}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          style={styles.sectionList}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 10,
  },
  writeMessageAvatar: {
    width: 24,
    height: 24,
  },
  messageText: {
    fontSize: 14,
    fontFamily: "Regular",
    color: "#2C3131",
  },
  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderGray,
    borderRadius: 12,
    paddingHorizontal: 30,
    marginHorizontal: Platform.OS === "ios" ? 24 : 24,
    minHeight: 50,
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 12,
    fontFamily: "Regular",
    color: colors.textGray,
  },

  sectionHeader: {
    fontSize: 14,
    fontFamily: "SemiBold",
    color: colors.primaryBlack,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
  },
  messageItem: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: 15,
    fontFamily: "Medium",
    color: colors.primaryBlack,
  },
  messagePreview: {
    fontSize: 14,
    color: colors.primaryBlack,
  },
  messageMeta: {
    alignItems: "flex-end",
  },
  messageTime: {
    fontSize: 11,
    color: "#0D0D26",
    fontFamily: "Medium",
    marginBottom: 3,
  },
  unreadBadge: {
    backgroundColor: colors.primaryBlue,
    marginTop: 4,
    minWidth: 20,
    height: 16,
    borderRadius: 198,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  unreadBadgeText: {
    color: colors.white,
    fontSize: 10,
    fontFamily: "Medium",
  },
});
