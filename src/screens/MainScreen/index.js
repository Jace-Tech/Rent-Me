import React from 'react'
import tw from "tailwind-react-native-classnames"
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { globalStyles } from '../../utils/globalStyles'

const MainScreen = () => {
    return (
        <View style={[globalStyles.fullScreen, {backgroundColor: '#fff'}]}>
            <StatusBar  />
            <SafeAreaView>
                
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})


export default MainScreen
