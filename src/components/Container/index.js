import { View, StyleSheet } from 'react-native'
import React from 'react'

const Container = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            { children }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 15,
    }
})

export default Container
