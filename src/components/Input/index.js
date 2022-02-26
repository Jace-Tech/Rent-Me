import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { TEXT_PRIMARY_COLOR } from '../../utils/colors'

const Input = ({ label, defaultValue, handleChange, placeholder, type }) => {
    return (
        <View>
            <Text style={styles.label}>{ label }</Text>
            <TextInput style={styles.textInput} onChangeText={handleChange} secureTextEntry={type === 'password'} defaultValue={defaultValue && defaultValue} placeholder={placeholder} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    label: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 16,
        color: TEXT_PRIMARY_COLOR
    },

    textInput:{
        height: 50,
        padding: 10,
        color: TEXT_PRIMARY_COLOR,
        fontWeight: '300',
        fontSize: 16,
        paddingHorizontal: 20,
        borderRadius: 4,
        borderColor: '#ccc',
        fontFamily: 'MavinBold',
        borderWidth: 1,
    }
})