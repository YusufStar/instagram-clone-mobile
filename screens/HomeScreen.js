import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from "../components/home/Header"
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import Posts from "../data/Posts"
import BottomTabs from '../components/home/BottomTabs'

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/500/ffffff/home.png",
    inactive: "https://img.icons8.com/fluency-systems-regular/500/ffffff/home.png"
  },
  {
    name: "Search",
    active: "https://img.icons8.com/fluency-systems-filled/500/ffffff/search.png",
    inactive: "https://img.icons8.com/fluency-systems-regular/500/ffffff/search.png"
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/500/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/500/ffffff/instagram-reel.png"
  },
  {
    name: "Shop",
    active: "https://img.icons8.com/fluency-systems-filled/500/ffffff/shop.png",
    inactive: "https://img.icons8.com/fluency-systems-regular/500/ffffff/shop.png"
  },
  {
    name: "Profile",
    active: "https://pps.whatsapp.net/v/t61.24694-24/236361426_565537061506106_5594200111650621032_n.jpg?ccb=11-4&oh=01_AdQ2eGEp-PP4hm5XuNJ_IUTfKSW7xq2xPPm7gyBeWUL3zQ&oe=63A7E032",
    inactive: "https://pps.whatsapp.net/v/t61.24694-24/236361426_565537061506106_5594200111650621032_n.jpg?ccb=11-4&oh=01_AdQ2eGEp-PP4hm5XuNJ_IUTfKSW7xq2xPPm7gyBeWUL3zQ&oe=63A7E032"
  }
]

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container, {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }]}>
        <Header/>
        <Stories/>
        <ScrollView>
          {Posts.map((post, index) => (
            <Post post={post} key={index}/>
          ))}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    }
})

export default HomeScreen