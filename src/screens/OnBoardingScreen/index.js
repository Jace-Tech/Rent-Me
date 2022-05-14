import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LoadFont from '../../components/LoadFont'
import AppIntroSlider from 'react-native-app-intro-slider'
import OnBoardCard from '../../components/OnBoardCard'
import Pagination from '../../components/Pagination'

const OnBoardingScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleDone = () => navigation.replace("Home")

    const slides = [
        {
            key: "kjsdcdjcdchdscdscsd",
            image: require('../../../assets/onboard/kitchen.jpg'),
            title: "Theatre of Homes",
            text: "Rent, Lease for years and have short time stay in a comfort space, anywhere, anytime."
        },
        {
            key: "hsvchsdcghdscdscsdc",
            image: require('../../../assets/onboard/chef.png'),
            title: "Enjoy the best taste",
            text: "Hire the best and reliable caterers from us and get best satisfication "
        },
        {
            key: "asfsfadsfcfadsfdf",
            image: require('../../../assets/onboard/janitor.jpeg'),
            title: "Hire a Janitor",
            text: "Swipe to access our professional janitors to keep your homes, offices fresh all day"
        },
        {
            key: "gwbergvfggfdf",
            image: require('../../../assets/onboard/wed.jpg'),
            title: "Spark your Events",
            text: "Hire all event tools for wedding, birthday, coronation, carnivals and burial ceremony"
        },
    ]
    return (
        <LoadFont style={{flex: 1}}>
            <AppIntroSlider 
                keyExtractor={(item) => item.key}
                data={slides}
                renderItem={({item}) =>  (
                    <OnBoardCard 
                        isLast={currentIndex === slides.length - 1}
                        handleDone={handleDone}
                        {...item}
                    />
                )}
                onSlideChange={(data) => setCurrentIndex(data)}
                renderPagination={(active) => (
                    <Pagination item={slides.length} _active={active} />
                )}
            />
        </LoadFont>
    )
}

export default OnBoardingScreen