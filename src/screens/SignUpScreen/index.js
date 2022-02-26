import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LoadFont from '../../components/LoadFont'
import Container from '../../components/Container'
import {PRIMARY_COLOR, TEXT_PRIMARY_COLOR} from "../../utils/colors"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { globalStyles } from '../../utils/globalStyles'
import { Icon } from 'react-native-elements'
import { Pressable } from 'react-native'
import { DatabaseContext } from "../../contexts/DatabaseContext"


const SignUp = ({ navigation }) => {
    const { DB, users } = useContext(DatabaseContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isPressed, setIsPressed] = useState(false)

    

    const addUser = () => {
        setIsPressed(prev => !prev)
        
        // DB.transaction(tx => {
        //     tx.executeSql("INSERT INTO users (id, username, password) VALUES (?, ?, ?)", [users?.length + 1, username, password], ((obj, {insertId}) => {
        //         if(insertId) {
        //             setIsPressed(prev => !prev)
        //         }
        //     }), (error) => {
        //         setIsPressed(prev => !prev)
        //         console.log("ERROR =>>>", error)
        //     })
        // })
        navigation.navigate('SignIn')
    }

    return (
        <LoadFont style={{flex: 1}}>
            <View>
                <View style={{marginTop: 80}}>
                    <Container>
                        <Text style={styles.signUpText}>Nice to have you here</Text>
                        <Text style={styles.signUpParagraph}>Create your account</Text>
                    </Container>
                </View>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ marginTop: 30 }}>
                    <Container>
                        <View style={{marginBottom: 25}}>
                            <Input label="Username" handleChange={setUsername} placeholder="Enter username"/>
                        </View>

                        <View>
                            <Input label="Password" handleChange={setPassword} type="password" placeholder="Enter password"/>

                            <View style={{ marginTop: 15}}>
                                <View style={[globalStyles.alignCenter, {marginBottom: 15}]}>
                                    <Icon name="check-circle" size={18} style={{marginRight: 10}} type="feather" />
                                    <Text >Password must be at least 8 characters</Text>
                                </View>

                                <View style={[globalStyles.alignCenter]}>
                                    <Icon name="check-circle" size={18} style={{marginRight: 10}} type="feather" />
                                    <Text >Password must be at least 8 characters</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 40}}>
                            <Button text="Register" disabled={isPressed} handleClick={addUser} color={PRIMARY_COLOR} />
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
                </KeyboardAvoidingView>

                <View style={{marginTop: 25}}>
                    <Container>
                        <View style={{borderTopColor: "#ccc", borderTopWidth: 1, paddingVertical: 10}}>
                            <Pressable onPress={() => navigation.push('SignIn')}>
                                <Text style={{textAlign: "center", color: TEXT_PRIMARY_COLOR}}>Already have an account? Login</Text>
                            </Pressable>
                        </View>
                    </Container>
                </View>

            </View>
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