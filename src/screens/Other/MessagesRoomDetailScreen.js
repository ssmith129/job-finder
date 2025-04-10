import React, { useState,useEffect,useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  ScrollView,
  Keyboard,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import colors from '../../config/colors';

const messagesData = [
    {
      id: '1',
      text: 'Hello, how are you?',
      createdAt: '12:00 PM',
      user: 'other',
    },
    {
      id: '2',
      text: 'I am fine, thank you!',
      createdAt: '12:01 PM',
      user: 'self',
    },
    {
        id: '2',
        text: 'I am fine, thank you!',
        createdAt: '12:01 PM',
        user: 'self',
      },
      {
        id: '3',
        text: 'I am also fine, thank you!',
        createdAt: '12:01 PM',
        user: 'other',
      },
 
  ];

export default function MessageRoomDetailScreen({ navigation, route }) {
  const { name, avatarUri } = route.params;
  const [messageText, setMessageText] = useState('');
  const scrollViewRef = useRef(null);
  const handlePress = (option) => {
    console.log(`${option} was pressed`);
  };

  const sendMessage = () => {
    console.log('Sending message:', messageText);
    setMessageText('');
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);
  const renderMessageItem = ({ item }) => {
    const isSelf = item.user === 'self';
    return (
      <View style={[
        styles.messageItem,
        isSelf ? styles.messageItemSelf : styles.messageItemOther
      ]}>
      <View>
        <View style={[
          styles.messageBubble,
          isSelf ? styles.messageBubbleSelf : styles.messageBubbleOther
        ]}>
          <Text style={[styles.messageText,!isSelf&&styles.messageTextActive]}>{item.text}</Text>
        </View>
        <Text style={[
          styles.messageTime,
          isSelf ? styles.messageTimeSelf : styles.messageTimeOther
        ]}>
          {item.createdAt}
        </Text>
        </View> 
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
  >
    <SafeAreaView style={styles.container}>
      
       <View style={styles.header}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.arrowBack}
              source={require("../../assets/icons/arrow.png")}
            />
          </TouchableOpacity>

          <ImageBackground style={styles.avatar} source={avatarUri} >
          
          <Image
          style={styles.onlieStatus}
          source={require('../../assets/icons/onlineStatus.png')}
          />
          </ImageBackground>

          <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.onlineText}>Online</Text>
          </View>

        </View>

        <View style={styles.callContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("call")}
          >
            <Image
              style={{ width: 24, height: 24,marginRight:10 }}
              source={require("../../assets/icons/call.png")}
            />
          </TouchableOpacity>

  

          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("dots")}
          >
            <Image
            style={{ width: 24, height: 24 }}
              source={require("../../assets/icons/menuDot.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      contentContainerStyle={{ paddingBottom: 20 }}

      >

      <View
      style={styles.yesterdayContainer}
      >
      <Text style={styles.yesterdaytext}>Yesterday</Text>
      </View>
      
      <View style={{flex:1,marginTop:50}}>
      <FlatList
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        style={styles.messagesList}
      />
      </View>
</ScrollView>

      <View
      style={styles.inputContainer}
    >
      <View style={styles.inputFieldContainer}>
      <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
      <Image
      style={{width:26,height:26,marginRight:4}}
      source={require('../../assets/icons/file.png')}
      />
    </TouchableOpacity>

   
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Write a reply..."
          placeholderTextColor="#A9A9A9" 
        />
        <TouchableOpacity>
        <AntDesign 
        style={{marginRight:10}}
        name="smileo" size={22} color="#A7A9B7" />
      </TouchableOpacity>
        
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
        <Image
        style={{width:26,height:26}}
        source={require('../../assets/icons/send.png')}
        />
      </TouchableOpacity>
      </View>
    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
    borderBottomWidth:1.5,
    borderBottomColor:'#F3F3F3',
    paddingBottom:15
  },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowBack: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: "Medium",
    color: colors.primaryBlack,
    marginBottom:Platform.OS==='android'?2:4
  },
  onlineText:
  {fontSize:14,
    fontFamily:"Regular",
    color:'#A9A9A9,'

  },
  settingIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 74,
    height: 30,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  divider: {
  
  },
  messagesList: {
    flex: 1,
  },
  messageItem: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
  },
  messageItemSelf: {
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  messageItemOther: {
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  messageBubble: {
    padding: 15,
    borderRadius: 15,
     
  },
  messageBubbleSelf: {
    backgroundColor: colors.primaryBlue,
    borderBottomRightRadius: 0, 
  },
  messageBubbleOther: {
    backgroundColor: '#F9F9F9',
    borderBottomLeftRadius: 0, 
  },
  messageText: {
    fontSize: 14,
    fontFamily:"Regular",
    color:colors.white
  },
  messageTextActive:
  {
    fontSize: RFValue(12.5),
    fontFamily:"Regular",
    color:'#626262'
  },
  messageTime: {
    fontSize: RFValue(9),
    color: '#A9A9A9',
    marginHorizontal: 0,
    marginTop:10
  },
  messageTimeSelf: {
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
  messageTimeOther: {
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    paddingBottom: Platform.OS === 'ios' ? 10 : 10,
    paddingHorizontal: 20,
    borderTopWidth:1,
    borderTopColor:'#F3F3F3',
    paddingTop:12,
    
  },
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 43,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth:1,
    borderColor:'#fff'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#979797',
    fontSize: 12,
    fontFamily:'Regular',
  },
  onlieStatus:
  {
  width:14,
  height:14,
  position:"absolute",
  zIndex:999999,
  right:0,
  top:-2
  },
  sendButton: {

  },
  yesterdayContainer:
  {
  width:92,
  height:26,
  backgroundColor:'rgba(19, 59, 183, 0.15)',
  borderRadius:30,
  justifyContent:"center",
  alignItems:"center",
  alignSelf:"center",
  marginTop:20,
  },
  yesterdaytext:
  {

  }

});
