import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, ScrollView, Alert } from 'react-native'
import { Icon } from "react-native-elements"
import { globalStyles } from '../../utils/globalStyles'
import { TEXT_SECONDARY_COLOR, RED } from "../../utils/colors"

import LoadFont from '../../components/LoadFont'
import HeaderNav from '../../components/HeaderNav'
import LinkTab from '../../components/LinkTab'
import Container from '../../components/Container'
import PageSection from '../../components/Section'
import RecentItem from '../../components/Recent'
import ProfileSection from '../../components/ProfileSection'



const Profile = ({ navigation }) => {

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
                navigation.navigate('Help')
            }
        },
        {
            title: 'settings',
            icon: 'setting',
            type: 'antdesign',
            handleClick(){
                navigation.navigate('Setting')
            }
        },
    ]

    const toggleLogout = () => {
        Alert.alert("WANT TO LOG OUT?", "This action can be cancelled and keep enjoying iRent app", [
            {
                text: 'Cancel',
                onPress: () => {
                    alert("Cancel")
                }
            },
            {
                text: "logout",
                onPress: () => {
                    alert("Log out")
                }
            }
        ])
    }

    return (
        <LoadFont style={{flex: 1}}>
            <HeaderNav title="Profile" />
            <ScrollView style={{flex: 1}}>
                <ProfileSection />

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
                            handleClick={() => toggleLogout()}
                            color={RED}
                        />
                    </Container>
                </View>

                <PageSection linkLess title="Recent Activity">
                    <FlatList 
                        keyExtractor={item => item.key}
                        data={recentActivity}
                        horizontal
                        contentContainerStyle={{alignItems: 'center', paddingVertical: 10}}
                        renderItem={({item}) => (
                            <RecentItem 
                                {...item}
                            />
                        )}
                    />
                </PageSection>

                <View style={{marginVertical: 20, marginBottom: 30}}>
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
