import { StyleSheet, Text, View, ImageBackground, FlatList, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LoadFont from '../../components/LoadFont'
import { Icon } from "react-native-elements"
import { StatusBar } from 'expo-status-bar'
import HeaderNav from '../../components/HeaderNav'
import { globalStyles } from '../../utils/globalStyles'
import Container from '../../components/Container'
import { TEXT_SECONDARY_COLOR, PRIMARY_COLOR, BLACK, RED } from "../../utils/colors"
import { useProfile } from '../../contexts/profileContext'
import LinkTab from '../../components/LinkTab'
import PageSection from '../../components/Section'
import RecentItem from '../../components/Recent'



const Profile = ({ navigation }) => {
    const {image, pickImage} = useProfile()

    const recentActivity = [
        {
            key: "sdvdsvvadvdvdcsa",
            image: require('../../../assets/house/house1.jpg'),
            label: 'retals'
        },
        {
            key: "sdcsdvdvdvvdfvfdvc",
            image: require('../../../assets/house/house2.jpg'),
            label: 'retals'
        },
    ]

    const profileLinks = [
        {
            title: 'Account details',
            icon: 'user',
            type: 'feather',
            handleClick(){
                navigation.navigate('Account')
            }
        },
        {
            title: 'change password',
            icon: 'eye',
            type: 'feather',
            handleClick(){
                navigation.navigate('Password')
            }
        },
        {
            title: 'help',
            icon: 'user',
            type: 'feather',
            handleClick(){
                navigation.navigate('Account')
            }
        },
        {
            title: 'settings',
            icon: 'setting',
            type: 'antdesign',
            handleClick(){
                navigation.navigate('Account')
            }
        },
    ]

    return (
        <LoadFont style={{flex: 1}}>
            <HeaderNav title="Profile" />
            <ScrollView style={{flex: 1}}>
                <ImageBackground source={require('../../bg/bg.png')} style={[globalStyles.alignCenter, styles.hero]}>
                    <Container>
                        <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                            <View style={{alignSelf: 'flex-end', marginBottom: 20}}>
                                <Text style={styles.profileName}>Jace Alexander</Text>
                                <Text style={styles.username}>@jaceAlex</Text>
                            </View>
                            <View style={styles.avatarBox}>
                                { image ? (
                                        <Image style={styles.avatar} source={{uri: image}} />
                                    ) : (
                                        <Image style={styles.avatar} source={require('../../../assets/jace-png.png')} />
                                    )
                                }
                                <Pressable style={styles.camera} onPress={pickImage}>
                                    <Icon 
                                        name="camera"
                                        size={18}
                                        type="feather"
                                        color="#fff"
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </Container>
                </ImageBackground>

                <View style={{marginVertical: 20}}>
                    <Container>
                        { 
                            profileLinks.map((link, index) => (
                                <LinkTab {...link} key={`${link.title}-${index}`} />
                            ))
                        }
                        <LinkTab 
                            icon="logout"
                            type="ionicons"
                            title="logout"
                            color={RED}
                        />
                    </Container>
                </View>

                <PageSection linkLess title="Recent Activity">
                    <FlatList 
                        keyExtractor={item => item.key}
                        data={recentActivity}
                        horizontal
                        contentContainerStyle={{alignItems: 'center'}}
                        renderItem={({item}) => (
                            <RecentItem 
                                {...item}
                            />
                        )}
                    />
                </PageSection>

                <View style={{marginVertical: 20}}>
                    <Container>
                        <Pressable onPress={() => {}} style={[globalStyles.alignCenter, styles.helpContainer ]}>
                            <Icon 
                                name="smile"
                                type="feather"
                                size={16}
                                color={TEXT_SECONDARY_COLOR}
                            />
                            <Text style={styles.helpText}>Feel free to ask anything, We're ready to help</Text>
                        </Pressable>
                    </Container>
                </View>
            </ScrollView>
        </LoadFont>
    )
}

const styles = StyleSheet.create({
    hero: {
        minHeight: 200,
        resizeMode: 'contain',
        justifyContent: 'space-between',
    },

    avatarBox: {
        width: 140,
        height: 150,
        backgroundColor: 'rgb(216,218,211)',
        position: 'relative',
        borderRadius: 4,
    },

    camera: {
        position: 'absolute',
        zIndex: 5,
        bottom: 0,
        right: 0,
        padding: 10,
        borderRadius: 20,
        transform: [
            {translateY: 10},
            {translateX: 5},
        ],
        backgroundColor: PRIMARY_COLOR
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },

    profileName: {
        fontSize: 20,
        lineHeight: 26.4,
        fontWeight: '700',
        color: BLACK,
    },

    username: {
        color: TEXT_SECONDARY_COLOR, 
        fontSize: 15,
        fontFamily: "MavinBold",
    },

    helpContainer: {
        padding: 15,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: 'rgba(9, 44, 76, 0.1)'
    },

    helpText: {
        marginLeft: 8,
        color: TEXT_SECONDARY_COLOR,
        fontFamily: "MavinBold",
    }

})

export default Profile
