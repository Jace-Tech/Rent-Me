import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'
import { globalStyles } from '../../utils/globalStyles'
import { BLACK, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { TextInput } from 'react-native'

const TextInputChange = ({ icon, handleChange, isSecured, value, handleSaveChange, type, label }) => {
    const [isChanged, setIsChanged] = useState(false)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev => prev + 1)
        setIsChanged(prev => !prev)
    }

    useEffect(() => {
        if((isChanged === false) && (count > 1)){
            handleSaveChange
        }
    }, [isChanged, count]);
    return (
        <View style={styles.textInputContainer}>
            <Text style={styles.label}>{ label }</Text>
            <View style={globalStyles.alignCenter}>
                { 
                    isChanged ? (
                        <TextInput style={styles.input} secureTextEntry={isSecured} keyboardType={type || 'default'} autoFocus={true} defaultValue={value} onChangeText={handleChange} />
                    ) : isSecured ? (
                            <Text style={styles.displayName}>********</Text>
                        ) : (
                        <Text style={styles.displayName}>{ value }</Text>
                    )
                }
               
                <Pressable style={{padding: 10}} onPress={handleClick}>
                    { 
                        icon ? 
                            isChanged ? (
                                <Text style={styles.changeBtn}>Save</Text>
                            ) : (
                                <Icon 
                                    name={ icon?.length ? icon : 'pencil-outline' }
                                    type="ionicon"
                                    size={20}
                                    color={TEXT_SECONDARY_COLOR}
                                />
                            ) : (
                            <Text style={styles.changeBtn}>{ isChanged ? "Save" : "Edit" }</Text>
                        )
                    }
                    
                </Pressable>
            </View>
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
    }
})

export default TextInputChange
