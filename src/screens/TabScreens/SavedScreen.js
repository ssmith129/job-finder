import { Platform,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import colors from '../../config/colors'
import SavedJobCard from '../../components/SaveJobCard';



export default function SavedScreen() {
  const [selectedJobType, setSelectedJobType] = useState("all");

  const jobData = [
    {
      id: '1',
      title: 'UX Intern',
      company: 'Spotify',
      salary: '$88,000/y',
      location: 'Los Angeles, US',
      status: 'Closed',
      type: 'Full-Time',
      logo: require('../../assets/icons/spotify.png'),
    },
    {
      id: '2',
      title: 'UX Designer',
      company: 'Dribble',
      salary: '$96,000/y',
      location: 'San Francisco, US',
      status: 'Open',
      type: 'Full-Time',
      logo: require('../../assets/icons/dribble.png'),
    },
    {
      id: '3',
      title: 'Product Designer',
      company: 'Face',
      salary: '$12,000/y',
      location: 'San Jose, US',
      status: 'Applied',
      type: 'Full-Time',
      logo: require('../../assets/icons/facebook.png'),
    },
  ];
  return (
    <SafeAreaView
    style={styles.container}
    >
      <Text
      style={styles.screenTitle}
      >You saved 48 Jobs 👍</Text>

    <View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.jobTypesScrollContainer}
    >
      {["All", "Design", "Developer", "Manager"].map((type) => (
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


    <View>
    <FlatList
    contentContainerStyle={{paddingBottom:100,}}
    data={jobData}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <SavedJobCard
        logo={item.logo}
        title={item.title}
        company={item.company}
        salary={item.salary}
        location={item.location}
        status={item.status}
        type={item.type}
      />
    )}
    showsVerticalScrollIndicator={false}
  />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

container:
{
  flex:1,
  backgroundColor:colors.background,
  paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,

},
screenTitle:
{
  fontSize:24,
  fontFamily:"SemiBold",
  color:colors.primaryBlack,
  marginHorizontal:24,
  marginTop:32

},
jobTypeContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 12,
},
jobTypeButton: {
  backgroundColor: "transparent",
  borderRadius: 97,
  paddingHorizontal: 20,
  height: 37,
  borderWidth:1,
  justifyContent: "center",
  alignItems: "center",
  marginRight: 16,
  marginBottom: 36,
  borderColor:'#95969D',
  marginTop:32,
},
jobTypeButtonSelected: {
  backgroundColor: colors.primaryBlue,
  borderWidth:0,
},
jobTypeText: {
  fontSize: 14,
  fontFamily: "Medium",
  color: "#62636A",
},
jobTypeTextSelected: {
  color: colors.white,
},
jobTypesScrollContainer:
{
  marginHorizontal:24,
  paddingRight:24
}

})