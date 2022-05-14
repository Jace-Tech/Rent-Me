import React, { useContext, useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'

import {GREEN, PRIMARY_COLOR, RED, TEXT_PRIMARY_COLOR} from "../../utils/colors"
import { globalStyles } from '../../utils/globalStyles'

import Input from '../../components/Input'
import Button from '../../components/Button'
import LoadFont from '../../components/LoadFont'
import Container from '../../components/Container'
// import { DB } from '../../../firebase'
import firestore from 'firebase/firestore'
import { generateId } from '../../utils/func'
import { useDatabase } from '../../contexts/DatabaseContext'
import { StatusBar } from 'expo-status-bar'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/slices/userSlice'


const SignUp = ({ navigation }) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [validation, setValidation] = useState({
        isLong: false,
        isValid: false,
    })

    const [isFocused, setIsFocused] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    
    const dispatch = useDispatch()


    const validatePassword = (text) => {
        const alphaRegex = /^[0-9a-zA-Z]{7}/

        if(user.password){
            if(alphaRegex.test(user.password)) {
                setValidation(prev => ({...prev, isValid: true}))
            }
            else { 
                setValidation(prev => ({...prev, isValid: false}))

            }

            if(user.password.length > 7){
                setValidation(prev => ({...prev, isLong: true}))
            }
            else {
                setValidation(prev => ({...prev, isLong: false}))

            }
        }
        else{
            setValidation({
                isLong: false,
                isValid: false,
            })

        }
    }
    
    const registerUser = () => {
        setIsPressed(prev => !prev)
        const newUser = {
            ...user,
            userId: generateId()
        }

        dispatch(addUser(newUser))
        setIsPressed(prev => !prev)
        navigation.navigate('SignIn')
    }
                    
    useEffect(() => {
        validatePassword()
    }, [user])

    return (
        <LoadFont style={{flex: 1}}>
            <StatusBar style="auto"  />
            <ScrollView style={{flex: 1}}>
                <View style={{marginTop: 80}}>
                    <Container>
                        <Text style={styles.signUpText}>Nice to have you here</Text>
                        <Text style={styles.signUpParagraph}>Create your account</Text>
                    </Container>
                </View>

                <View behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ marginTop: 30 }}>
                    <Container>
                        <View style={{marginBottom: 25}}>
                            <Input label="Username" handleChange={(text) => setUser(prev => ({...prev, username: text}))} placeholder="Enter username"/>
                        </View>

                        <View style={{marginBottom: 25}}>
                            <Input label="Email" keyType="email-address" handleChange={(text) => setUser(prev => ({...prev, email: text}))} placeholder="Enter email"/>
                        </View>

                        <View>
                            <Input label="Password" handleFocus={() => setIsFocused(true) } handleBlur={() => setIsFocused(false)} handleChange={text => setUser(prev => ({...prev, password: text}))} type="password" placeholder="Enter password"/>

                            <View style = {{marginTop: 15, height: isFocused ? 50 : 0}} >
                                <View style={[globalStyles.alignCenter, {marginBottom: 15}]}>
                                    { 
                                        validation.isValid ? (
                                            <Icon name="check-circle" size={18} style={{marginRight: 10}} color={GREEN} type="feather" />
                                        ) : (
                                            <Icon name="x-circle" size={18} style={{marginRight: 10}} color={RED} type="feather" />
                                        )
                                    }
                                    <Text style={{color: validation.isValid ? GREEN : RED}}>Password must be alphanumeric. </Text>
                                </View>

                                <View style={[globalStyles.alignCenter]}>
                                    { 
                                        validation.isLong ? (
                                            <Icon name="check-circle" size={18} style={{marginRight: 10}} color={GREEN} type="feather" />
                                        ) : (
                                            <Icon name="x-circle" size={18} style={{marginRight: 10}} color={RED} type="feather" />
                                        )
                                    }
                                    <Text style={{color: validation.isLong ? GREEN : RED}}>Password must be at least 8 characters</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 40}}>
                            <Button text="Register" disabled={isPressed} handleClick={registerUser} color={PRIMARY_COLOR} />
                        </View>
                    </Container>

                    <View style={{marginVertical: 30}}>
                        <Text style={{ textAlign: 'center', color: '#777'}}>or with</Text>
                    </View>

                    <View style={[globalStyles.alignCenter, { justifyContent: 'center' }]}>
                        <TouchableOpacity style={{marginRight: 25}}>
                            <Image source={require("../../icons/google.png")} style={styles.social} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image source={require("../../icons/f.png")} style={[styles.social, {resizeMode: 'cover'}]} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginVertical: 25}}>
                    <Container>
                        <View style={{borderTopColor: "#ccc", borderTopWidth: 1, paddingVertical: 10}}>
                            <Pressable onPress={() => navigation.push('SignIn')}>
                                <Text style={{textAlign: "center", color: TEXT_PRIMARY_COLOR}}>Already have an account? Login</Text>
                            </Pressable>
                        </View>
                    </Container>
                </View>

            </ScrollView>
        </LoadFont>
    )
}

export default SignUp

const styles = StyleSheet.create({
    signUpText: {
        fontSize: 28,
        fontWeight: '700',
        color: PRIMARY_COLOR
    },

    icons: {
        fontSize: 13
    },

    social: {
        width: 40,
        height: 40,
        borderRadius: 40,
        resizeMode: 'contain'
    },

    signUpParagraph: {
        color: TEXT_PRIMARY_COLOR,
        fontFamily: "MavinBold",
        fontSize: 16
    }
})