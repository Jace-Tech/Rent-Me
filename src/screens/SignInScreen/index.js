import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import LoadFont from '../../components/LoadFont'
import Container from '../../components/Container'
import {PRIMARY_COLOR, TEXT_PRIMARY_COLOR} from "../../utils/colors"
import Input from '../../components/Input'
import Button from '../../components/Button'
import { globalStyles } from '../../utils/globalStyles'
import { DatabaseContext } from '../../contexts/DatabaseContext'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../store/slices/userSlice'

const SignIn = ({ navigation }) => {
    const { users, DB } = useContext(DatabaseContext)
    const [password, setPassword] = useState('')
    const [isPressed, setIsPressed] = useState(false)

    const dispatch = useDispatch()
    const selectedUser = useSelector(({user}) => user.user)

    const handleLogin = () => {
        navigation.navigate('Category')

        // if(password){
        //     DB.transaction(tx => {
        //         tx.executeSql("SELECT * FROM users WHERE password = ?", [password], (txObj, result) => {
        //             if(result?.rows?.length){
        //                 dispatch(addUser(result?.rows?._array[0]))
        //             }
        //         })
        //     })
        // }
    }

    return (
        <LoadFont style={{flex: 1}}>
            <View style={{marginTop: 80}}>
                <Container>
                    <Text style={styles.signInText}>Nice to have you back</Text>
                    <Text style={styles.signInParagraph}>Enter your details let's log you in</Text>
                </Container>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ marginTop: 30 }}>
                <Container>
                    <View>
                        <Input label="Password" handleChange={setPassword} type="password" placeholder="Enter password"/>
                    </View>

                    <View style={{ marginTop: 40}}>
                        <Button handleClick={handleLogin} disabled={isPressed} text="Login" color={PRIMARY_COLOR} />
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

            <View style={{marginTop: 100}}>
                <Container>
                    <View style={{borderTopColor: "#ccc", borderTopWidth: 1, paddingVertical: 10}}>
                        <Pressable onPress={() => navigation.push('SignUp')}>
                            <Text style={{textAlign: "center", color: TEXT_PRIMARY_COLOR}}>Don't have an account? Register</Text>
                        </Pressable>

                        <Pressable style={{marginTop: 20}} onPress={() => {}}>
                            <Text style={{textAlign: "center", color: TEXT_PRIMARY_COLOR}}>Forgot Password? Reset it</Text>
                        </Pressable>
                    </View>
                </Container>
            </View>
        </LoadFont>
    )
}

export default SignIn

const styles = StyleSheet.create({
    signInText: {
        fontSize: 28,
        fontWeight: '700',
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

    signInParagraph: {
        color: TEXT_PRIMARY_COLOR,
        fontFamily: "MavinBold",
        fontSize: 16
    }
})