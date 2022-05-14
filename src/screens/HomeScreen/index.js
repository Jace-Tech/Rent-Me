import React, { useContext, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, FlatList, TextInput, Pressable, StatusBar, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

import { PRIMARY_COLOR, BLACK, TEXT_PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { MoreContext } from '../../contexts/MoreContext'
import { addProperty } from '../../store/slices/detailSlice'

import { globalStyles } from '../../utils/globalStyles'
import Stack from '../../components/Stack'
import Container from '../../components/Container'
import LoadFont from '../../components/LoadFont'
import PropertyCard from '../../components/PropertyCard'
import PropertyCardList from '../../components/PropertyCardList'
import PageSection from '../../components/Section'
import RentalCard from '../../components/RentalCard'
import { categories, content, services } from '../../utils/data'



const HomeScreen = ({ navigation }) => {
    const user = useSelector(({ user }) => user.user )
    const [isChanging, setIsChanging] = useState(null)
    const dispatch = useDispatch()
    const details = useSelector(state => state.details.property)

    const { setMore, setMoreContent } = useContext(MoreContext)

    const handleClick = (title, content) => {
        setMore(title)
        setMoreContent(content)
        navigation.navigate('More')
    }

    const handleItem = (item) => {
        dispatch(addProperty(item))
        navigation.navigate('Details')
    }

    return (
        <>
            <StatusBar />
            <LoadFont style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={{marginTop: 50, paddingBottom: 10}}>
                        <Container>
                            <View style={[globalStyles.alignCenter, { justifyContent: 'space-between'}]}>
                                <View>
                                    <Text style={styles.greeting}>Good morning, {user?.username || "Guest"} </Text>
                                    <Text style={styles.greetingSub}>Based on your selected categories</Text>
                                </View>

                                <Pressable onPress={() => navigation.navigate("Profile")}>
                                    <Image source={require('../../icons/logo.png')} style={styles.avatar} />
                                </Pressable>
                            </View>

                            <View style={{marginTop: 20}}>
                                <View style={[globalStyles.alignCenter, {alignItems: 'stretch'}]}>
                                    <View style={[globalStyles.alignCenter, styles.searchBox]}>
                                        <Icon style={{marginRight: 10}} color={TEXT_SECONDARY_COLOR} name="search-outline" type="ionicon" />
                                        <TextInput style={styles.searchInput} placeholder="Search address, locations..." />
                                    </View>

                                    <Pressable onPress={() => alert("Open filter sidebar...")} style={styles.filterBtn}>
                                        <Icon color="#fff" name="ios-options" size={20} type="ionicon" />
                                    </Pressable>
                                </View>
                            </View>
                        </Container>
                    </View>

                    <ScrollView style={{flex: 1}}>
                        <View>
                            <Stack data={categories} />
                        </View>

                        <PageSection title="Recommended for you" handleClick={() => handleClick('Recommended for you', content)}>
                            <View style={{flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row'}}>
                                {
                                    categories.map((item, index) => (
                                        <PropertyCard 
                                            {...item}
                                            handleClick={() => handleItem(item)}
                                            key={`${item.title}_${index}`} 
                                        /> 
                                    ))
                                }
                            </View>
                        </PageSection>

                        <PageSection title="Latest">
                            <FlatList 
                                keyExtractor={item => item.key}
                                data={categories}
                                contentContainerStyle={{minHeight: 135, paddingVertical: 10}}
                                horizontal
                                renderItem={({item}) =>  (
                                    <PropertyCard 
                                        {...item}
                                    />
                                )}
                            />
                        </PageSection>

                        <PageSection title="Rental at the go">
                            <FlatList 
                                keyExtractor={item => item.key}
                                data={services}
                                contentContainerStyle={{alignItems: 'center', paddingVertical: 5}}
                                horizontal
                                renderItem={({item}) =>  (
                                    <RentalCard {...item}  />
                                )}
                            />
                        </PageSection>

                        <PageSection title="Special Offer">
                            {/* <MoreOffer /> */}
                            <Image style={{width: '100%', height: 200, borderRadius: 4}} source={require('../../../assets/house/house1.jpg')} />
                        </PageSection>

                        <PageSection title="Featured Property">
                            <FlatList 
                                keyExtractor={item => item.key}
                                data={content}
                                decelerationRate="fast"
                                snapToAlignment='center'
                                snapToInterval={Dimensions.get('screen').width}
                                horizontal
                                contentContainerStyle={{alignItems: 'center', paddingVertical: 10}}
                                renderItem={({item}) =>  (
                                    <PropertyCardList {...item}  />
                                )}
                            />   
                        </PageSection>
                    </ScrollView>
                </SafeAreaView>
            </LoadFont>
        </>
    )
}


const styles = StyleSheet.create({
    greeting: {
        fontSize: 22, 
        fontWeight: '700',
        color: BLACK,
    },

    avatar: {
        width: 55, height: 55
    },

    searchInput: {
        fontFamily: "MavinBold",
        fontSize: 14,
        color: TEXT_PRIMARY_COLOR
    },

    searchBox: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        borderColor: '#E2E5DE'
    },

    filterBtn: {
        display: 'flex',
        borderRadius: 4,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 12,
        paddingHorizontal: 13,
        backgroundColor: PRIMARY_COLOR,
        // elevation: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 0
        // },
        // shadowOpacity: .3,
        // shadowRadius: 5
    },

    greetingSub: {
        fontSize: 13,
        fontFamily: "MavinBold",
        color: TEXT_SECONDARY_COLOR
    }
})

export default HomeScreen
