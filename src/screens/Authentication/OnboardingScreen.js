import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import colors from "../../config/colors";

const { width, height } = Dimensions.get("window");

const data = [
  {
    title: "Search your job",
    text: "Figure out your top five priorities whether it is company culture, salary.",
    image: require("../../assets/images/onboard1.png"),
  },
  {
    title: "Apply to best jobs",
    text: "You can apply to your desirable jobs very quickly and easily with ease.",
    image: require("../../assets/images/onboard3.png"),
  },
  {
    title: "Make your career",
    text: "We help you find your dream job based on your skillset, location, demand.",
    image: require("../../assets/images/onboard3.png"),
  },
];

const renderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image style={styles.onBoardAvatar} source={item.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

export default function OnboardingScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === data.length - 1;
  const carouselRef = useRef(null);

  const handleNextPress = () => {
    if (!isLastSlide) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
      carouselRef.current.next();
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  const handleSkipPress = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        ref={carouselRef}
        loop={false}
        autoPlay={false}
        width={width}
        height={height}
        data={data}
        scrollAnimationDuration={500}
        onSnapToItem={setActiveIndex}
        renderItem={({ item }) => renderItem({ item })}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextPress}
        >
          <Text style={styles.buttonText}>{isLastSlide ? "Explore" : "Next"}</Text>
        </TouchableOpacity>

        {!isLastSlide && (
          <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
            <Text style={{ ...styles.buttonText, color: colors.darkgray }}>
              Skip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  footer: {
    position: "absolute",
    bottom: 32,
    width: '100%',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  title: {
    fontSize: 28,
    fontFamily: "SemiBold",
    marginBottom: 24,
    color: colors.primaryBlack,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Regular",
    paddingHorizontal: 32,
    color: colors.darkgray,
  },
  nextButton: {
    backgroundColor: colors.primaryBlue,
    width: '80%', // Adjusted width
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  skipButton: {
    backgroundColor: "transparent",
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "SemiBold",
  },
  onBoardAvatar: {
    width: 284,
    height: 284,
    resizeMode: "contain",
    marginTop: 80,
  },
});
