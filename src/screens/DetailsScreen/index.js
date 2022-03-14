import { Image, Pressable, ScrollView, StyleSheet, FlatList, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'react-native-elements'
import MapView from 'react-native-maps'

import { globalStyles } from '../../utils/globalStyles'
import { BLACK, BLUE, GREEN, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { useMap } from '../../contexts/MapContext'

import Container from '../../components/Container'
import PageSection from '../../components/Section'
import PropertyCard from '../../components/PropertyCard'
import PropertyCardList from '../../components/PropertyCardList'
import HeaderNav from '../../components/HeaderNav'
import LoadFont from '../../components/LoadFont'



const Details = ({ navigation }) => {
    const details = useSelector(state => state.details.property)
    const { initialRegion } = useMap()

    const categories = [
        {
            key: "kjsvhjdshdjsvdjsvs823723",
            label: "rent",
            title: "6 Bedroom Flat",
            price: 150000,
            duration: "month",
            location: "Zik's Avenue, Enugu State",
            image: require('../../../assets/house/house1.jpg'),
        },
        {
            key: "ksviu89wf0wujklcjidsssdvwoef",
            label: "lease",
            title: "6 Bedroom Flat",
            price: 320000,
            duration: "month",
            location: "Zik's Avenue, Enugu State",
            image: require('../../../assets/house/house2.jpg'),
        },
        {
            key: "0w9efiohw7guiqbcwdc7wgfo",
            label: "hire",
            title: "6 Bedroom Flat",
            price: 150000,
            duration: "month",
            location: "Zik's Avenue, Enugu State",
            image: require('../../../assets/house/house3.jpg'),
        },
        {
            key: "pqdichwegvbcavaoef384uhf",
            label: "shortlet",
            title: "6 Bedroom Flat",
            price: 150000,
            duration: "month",
            location: "Zik's Avenue, Enugu State",
            image: require('../../../assets/house/house4.jpg'),
        },
    ]

    const images = [
        {
            image: require('../../../assets/house/house1.jpg'),
            key: 'iyasgcyascas'
        },
        {
            image: require('../../../assets/house/house2.jpg'),
            key: 'wpfjwechefiuwfh'
        },
        {
            image: require('../../../assets/house/house3.jpg'),
            key: 'apdjqwoijqche'
        },
        {
            image: require('../../../assets/house/house4.jpg'),
            key: 'ufweucwvnsdgivsdd'
        },
    ]


    useEffect(() => {
        if(!details){
            navigation.goBack()
        }
    }, [details])

    return (
        <LoadFont style={globalStyles.fullScreen}>
            <HeaderNav title="Details" />

            <ScrollView style={{flex: 1}}> 
                <View>v
                    <Container>
                        <View style={{position: 'relative', paddingBottom: 30}}>
                            <Image source={details.image} style={styles.detailImage} />
                            <View style={[globalStyles.alignCenter, styles.detailAuthor]}>
                                <Image source={details.image} style={styles.authorImage} />
                                <View style={{marginHorizontal: 10}}>
                                    <Text style={styles.authorName}>Timothy Chukwuebuka</Text>
                                    <Text style={styles.authorOwnership}>Landlord, Owner</Text>
                                </View>
                                <View style={[globalStyles.alignCenter]}>
                                    <Pressable style={[styles.iconButton, {backgroundColor: GREEN}]}>
                                        <Icon name="local-phone" color="#fff" size={20} type="materialicon" />
                                    </Pressable>

                                    <Pressable onPress={() => navigation.navigate('Message')} style={[styles.iconButton, {marginLeft: 8, backgroundColor: BLUE}]}>
                                        <Icon name="message-circle" color="#fff" size={20} type="feather" />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Container>
                </View>

                <View style={{marginTop: 30}}>
                    <Container>
                        <Text style={styles.propertyTitle}>House of TimoChuks</Text>
                        <View style={globalStyles.alignCenter}>
                            <Icon 
                                name="ios-location-outline"
                                size={20}
                                type="ionicon"
                                color={TEXT_SECONDARY_COLOR }
                            />
                            <Text style={[styles.propertyLocation, {marginLeft: 1}]}>Zik Avenue, Enugu, Enugu State</Text>
                        </View>
                    </Container>
                </View>

                <View style={{marginTop: 20}}>
                    <Container>
                        <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                            <View>
                                <Icon 
                                    size={16}
                                    style={{marginBottom: 5}}
                                    name="md-bulb-outline" 
                                    type="ionicon"
                                    color={TEXT_SECONDARY_COLOR}
                                />
                                <Text style={{color: TEXT_SECONDARY_COLOR, fontSize: 12}}>Light? Yes!</Text>
                            </View>

                            <View>
                                <Icon 
                                    size={16}
                                    style={{marginBottom: 5}}
                                    name="bathtub" 
                                    type="fontawesome"
                                    color={TEXT_SECONDARY_COLOR}
                                />
                                <Text style={{color: TEXT_SECONDARY_COLOR, fontSize: 12}}>3 Bathrooms</Text>
                            </View>

                            <View>
                                <Icon 
                                    size={16}
                                    style={{marginBottom: 5}}
                                    name="sunrise" 
                                    type="feather"
                                    color={TEXT_SECONDARY_COLOR}
                                />
                                <Text style={{color: TEXT_SECONDARY_COLOR, fontSize: 12}}>Comfortable</Text>
                            </View>

                            <View>
                                <Icon 
                                    size={16}
                                    style={{marginBottom: 5}}
                                    name="ios-bed-outline" 
                                    type="ionicon"
                                    color={TEXT_SECONDARY_COLOR}
                                />
                                <Text style={{color: TEXT_SECONDARY_COLOR, fontSize: 12}}>3 Bedrooms</Text>
                            </View>
                        </View>
                    </Container>
                </View>

                <View style={{marginTop: 20}}>
                    <Container>
                        <MapView 
                            style={styles.mapStyle}
                            initialRegion={initialRegion}
                        />
                    </Container>
                </View>

                <PageSection title="Property Overview" style={{marginTop: 25}} linkLess>
                    <Text style={styles.paragraph}>A well-presented, self-motivated individual making positive impact. Ezra is a team player with leadership, technical, interpersonal, and excellent communication skills in contributing to the development of organization goals.</Text>
                    <Text style={styles.paragraph}>A well-presented, self-motivated individual making positive impact. Ezra is a team player with leadership, technical, interpersonal,  and excellent communication skills in  contributing to the development of organization goals. player with leadership, technical, interpersonal,  and excellent communication skills in  contributing to the development of organization goals.</Text>
                </PageSection>

                <PageSection title="Other rooms" linkLess>
                    <FlatList 
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{alignItems: 'center'}}
                        decelerationRate="fast"
                        snapToAlignment='center'
                        snapToInterval={255}
                        data={images}
                        horizontal
                        renderItem={({item}) => (
                            <Pressable onPress={() => {}} style={{padding: 10, width: 280}}>
                                <Image source={item.image} style={styles.detailImage} />
                            </Pressable>
                        )}
                    />
                </PageSection>

                <PageSection title="Recently view">
                    <FlatList 
                        keyExtractor={item => item.key}
                        data={categories}
                        horizontal
                        renderItem={({item}) =>  (
                            <PropertyCard {...item}  />
                        )}
                    />
                </PageSection>

                <PageSection title="You might also like">
                    <FlatList 
                        keyExtractor={item => item.key}
                        data={categories}
                        contentContainerStyle={{alignItems: 'center'}}
                        decelerationRate="fast"
                        snapToAlignment='center'
                        snapToInterval={Dimensions.get('screen').width}
                        horizontal
                        renderItem={({item}) =>  (
                            <PropertyCardList {...item} />
                        )}
                    />
                </PageSection>
            </ScrollView>
        </LoadFont>
    )
}

export default Details

const styles = StyleSheet.create({
    detailTitle: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        fontWeight: '700',
    },

    mapStyle: {
        height: 200,
        borderRadius: 10,
    },

    detailImage: {
        resizeMode: 'cover',
        width: '100%',
        height: 243,
        position: 'relative',
        borderRadius: 4
    },

    detailAuthor:  {
        alignSelf: 'center', 
        backgroundColor: "#fff",
        position: 'absolute',
        padding: 8,
        bottom: 0,
        borderRadius: 4,
        zIndex: 50,
    },
    
    authorName: {
        fontWeight: '700'
    },

    authorImage: {
        width: 45,
        height: 45,
        zIndex: 9
    },

    authorOwnership: {
        color: TEXT_SECONDARY_COLOR
    },

    iconButton: {
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'green'
    },

    propertyTitle: {
        fontWeight: '700',
        fontSize: 20,
    },

    propertyLocation: {
        fontSize: 13,
        color: TEXT_SECONDARY_COLOR,
        lineHeight: 26
    },

    paragraph: {
        fontSize: 14,
        color: TEXT_SECONDARY_COLOR,
        lineHeight: 24,
        fontSize: 16,
        fontFamily: 'MavinBold',
        marginBottom: 15
    }

})