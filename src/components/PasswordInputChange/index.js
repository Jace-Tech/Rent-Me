import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'

import { BLACK, RED, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { globalStyles } from '../../utils/globalStyles'

const PasswordInputChange = ({ label, handleChange, error }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{ label }</Text>

            <View style={globalStyles.alignCenter}>
                <TextInput style={styles.input} secureTextEntry={!isVisible} placeholder="********" keyboardType='default' autoFocus={true} onChangeText={handleChange} />
                <Pressable style={{padding: 10}} onPress={() => setIsVisible(prev => !prev)}>
                    <Icon 
                        name={ isVisible ? 'eye-off-outline' : 'eye-outline'}
                        type="ionicon"
                        size={20}
                        color={TEXT_SECONDARY_COLOR}
                    />
                </Pressable>
            </View>

            { 
                error && (
                    <Text style={styles.error}>Passwords do not match</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        marginVertical: 5,
    },
    label: {
        textTransform: 'uppercase', 
        fontSize: 12,
        letterSpacing: .3,
        fontWeight: '700',
        color: BLACK
    },
    displayName: {
        flex: 1,
        fontSize: 16,
        fontFamily: "MavinBold",
        color: TEXT_SECONDARY_COLOR
    },
    changeBtn: {
        color: TEXT_SECONDARY_COLOR,
        letterSpacing: .5
    },

    input: {
        flex: 1,
        fontFamily: "MavinBold",
        fontSize: 16,
        color: TEXT_SECONDARY_COLOR
    },
    error: {
        color: RED,
        fontSize: 12
    }
})

export default PasswordInputChange
