import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../../utils/colors'
import { useProfile } from '../../contexts/profileContext'

import PageSection from '../../components/Section'
import LoadFont from '../../components/LoadFont'
import HeaderNav from '../../components/HeaderNav'
import ProfileSection from '../../components/ProfileSection'
import TextInputChange from '../../components/TextInputChange'
import CustomButton from '../../components/Button'



const AccountScreen = () => {
    const { profileDetails, setProfileDetails } = useProfile()
    
    return (
        <LoadFont style={{flex: 1}}>
            <HeaderNav title="Account Details" />
            <ScrollView style={{flex: 1}}>
                <ProfileSection />

                <PageSection size={18} style={{marginTop: 20}} title="Account Details" linkLess>

                    {/* FULL NAME */}
                    <TextInputChange 
                        label="display name"
                        value={profileDetails.fullName}
                        type="default"
                        handleChange={(text) => setProfileDetails(prev => ({...prev, fullName: text})) }
                        icon={'pencil-outline'}
                    />

                    {/* EMAIL  */}
                    <TextInputChange 
                        label="email address"
                        value={profileDetails.email}
                        type="email-address"
                        handleChange={(text) => setProfileDetails(prev => ({...prev, email: text})) }
                    />

                    {/* PHONE NUMBER */}
                    <TextInputChange 
                        label="phone number"
                        type="phone-pad"
                        value={profileDetails.phone}
                        handleChange={(text) => setProfileDetails(prev => ({...prev, phone: text})) }
                    />

                    {/* GENDER */}
                    <TextInputChange 
                        label="gender"
                        type="default"
                        value={profileDetails.gender}
                        handleChange={(text) => setProfileDetails(prev => ({...prev, gender: text})) }
                    />

                    {/* AGE */}
                    <TextInputChange 
                        label="age"
                        value={+profileDetails.age}
                        type="number-pad"
                        handleChange={(text) => setProfileDetails(prev => ({...prev, age: text})) }
                    />

                    {/* NATIONALITY */}
                    <TextInputChange 
                        label="nationality"
                        value={profileDetails.nationality}
                        type="default"
                        handleChange={(text) => setProfileDetails(prev => ({...prev, nationality: text})) }
                    />

                    <View style={{marginTop: 30, marginBottom: 20}}>
                        <CustomButton handleClick={() => alert("Profile Updated")} color={PRIMARY_COLOR} text="save changes" />
                    </View>
                </PageSection>
            </ScrollView>
        </LoadFont>
    )
}

export default AccountScreen
