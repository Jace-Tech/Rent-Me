import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { useFonts } from '@use-expo/font'
import { globalStyles } from '../../utils/globalStyles'


const fonts = {
    // Nunito Light
    NinitoLight: require('../../fonts/NunitoSans-Light.ttf'),
    NinitoRegular: require('../../fonts/NunitoSans-Regular.ttf'),
    NinitoExtraLight: require('../../fonts/NunitoSans-ExtraLight.ttf'),
    NinitoBold: require('../../fonts/NunitoSans-Bold.ttf'),

    // MavinPro
    MavinBold: require('../../fonts/MavenPro-VariableFont_wght.ttf'), 
}

const LoadFont = ({ children, style }) => {
    const [isFontLoaded] = useFonts(fonts)

    if(!isFontLoaded){
        return (
            <View style={{flex: 1}}> 
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View style={[globalStyles.fullScreen, style && style]}>
            { children }
        </View>
    )
}

export default LoadFont
