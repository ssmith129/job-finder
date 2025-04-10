import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

const NotificationItem = ({ icon, message, time, color }) => {
  // Function to bold the company names
  const renderMessageWithBoldText = (text) => {
    const words = text.split(' ');
    const boldWords = ['Fiverr', 'BMW', 'Bookingcom', 'Beats', 'Behance']; // Add more as needed
    return words.map((word, index) => {
      const isBold = boldWords.includes(word.replace(/\W/g, ''));
      return (
        <Text key={`${word}-${index}`} style={isBold ? styles.boldText : null}>
          {word + (index < words.length - 1 ? ' ' : '')}
        </Text>
      );
    });
  };

  const messageColor = color ? { color: color } : null;
  const timeColor = color ? { color: color } : styles.time;

  return (
    <View style={styles.notificationItem}>
      <Image source={icon} style={styles.iconStyle} />
      <View style={styles.messageContainer}>
        <Text style={[styles.message, messageColor]}>
          {renderMessageWithBoldText(message)}
        </Text>
        <Text style={[styles.time, timeColor]}>{time}</Text>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: 'row',
    paddingHorizontal:24,
    alignItems: 'center',
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    marginBottom:20,
  },
  messageContainer: {
    flex: 1,
    marginVertical: 16,
  },
  message: {
    fontSize: 13,
    color: colors.darkgray,
    fontFamily:"Regular",
    lineHeight:22,
    marginBottom:4
  },

  boldText: {
    fontFamily:"SemiBold"
  },
  time: {
    fontSize: 13,
    color: colors.darkgray, 
    fontFamily:"Medium"
  },

});

export default NotificationItem;
