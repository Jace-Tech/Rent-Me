import React, { useEffect } from 'react'
import { Dimensions, Image } from 'react-native'
import { View, StyleSheet } from 'react-native'
import LoadFont from '../../components/LoadFont'
import { PRIMARY_COLOR, TEXT_PRIMARY_COLOR } from '../../utils/colors'


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => navigation.replace('SignUp'), 5000)
    }, [])

    return (
        <LoadFont style={{ backgroundColor: PRIMARY_COLOR }}>
            <View style={[styles.splashScreen]}>
                <Image source={require('../../icons/logo.png')} style={{width: 150, height: 150}} />
            </View>
        </LoadFont>
    )
}

const styles = StyleSheet.create({
    splashScreen: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    splashText: {
        fontSize: 26,
        fontFamily: 'MavinBold',
        color: TEXT_PRIMARY_COLOR
    }
})

export default SplashScreen
