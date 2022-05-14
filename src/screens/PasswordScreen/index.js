import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useProfile } from '../../contexts/profileContext'
import { PRIMARY_COLOR } from '../../utils/colors'

import LoadFont from '../../components/LoadFont'
import HeaderNav from '../../components/HeaderNav'
import ProfileSection from '../../components/ProfileSection'
import PageSection from '../../components/Section'
import PasswordInputChange from '../../components/PasswordInputChange'
import CustomButton from '../../components/Button'


const PasswordScreen = () => {
    const { profileDetails, setProfileDetails } = useProfile()
    const [error, setError] = useState(false)
    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    useEffect(() => {
        if(password.newPassword && password.confirmPassword){
            if(password.newPassword !== password.confirmPassword){
                console.log({new: password.newPassword, old: password.confirmPassword})
                setError(true)
            }
            else{
                setError(false)
            }
        }else{
            setError(false)
        }
    }, [password, setPassword])

    return (
        <LoadFont style={{flex: 1}}>
            <HeaderNav title="Change Password" />
            <ScrollView style={{flex: 1}}>
                <ProfileSection />

                <PageSection title="Password Details" style={{marginTop: 20}} size={18} linkLess>

                    {/* OLD PASSWORD */}
                    <PasswordInputChange
                        label="old password"
                        handleChange={(text) => setPassword(prev => ({...prev, oldPassword: text})) }
                    />

                    {/* NEW PASSWORD */}
                    <PasswordInputChange 
                        label="new password"
                        handleChange={(text) => setPassword(prev => ({...prev, newPassword: text}))}
                    />

                    {/* COMFIRM PASSWORD */}
                    <PasswordInputChange 
                        label="confirm password"
                        handleChange={(text) => setPassword(prev => ({...prev, confirmPassword: text}))}
                        error={error}
                    />

                    <View style={{marginTop: 30, marginBottom: 20}}>
                        <CustomButton disabled={error} handleClick={() => alert("Password Updated")} color={PRIMARY_COLOR} text="save changes" />
                    </View>
                </PageSection>
            </ScrollView>
        </LoadFont>
    )
}

export default PasswordScreen