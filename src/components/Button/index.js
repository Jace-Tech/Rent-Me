import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TEXT_PRIMARY_COLOR } from '../../utils/colors'

const CustomButton = ({ color, disabled, text, handleClick }) => {
    return (
        <TouchableOpacity disabled={disabled && disabled} onPress={handleClick} style={[styles.customButton, { backgroundColor: color && color, opacity: disabled ? .5 : 1}]}>
            <Text style={[styles.btnText, {color: color && "#fff"}]}>{ text }</Text>
        </TouchableOpacity>
    )
}


export default CustomButton


const styles = StyleSheet.create({
    customButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: "#ccc",
        borderRadius: 4,
    },

    btnText: {
        color: TEXT_PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: "600",
        fontFamily: "MavinBold",
        textTransform: 'capitalize'
    }
})