import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { globalStyles } from '../../utils/globalStyles'
import { TEXT_SECONDARY_COLOR } from '../../utils/colors'

const LinkTab = ({ handleClick, icon, title, style, type, color }) => { 
    return (
        <Pressable onPress={handleClick} style={[styles.linkTab, style]}>
            <View style={[globalStyles.alignCenter]}>
                <View style={[globalStyles.alignCenter, {flex: 1}]}>
                    <Icon 
                        name={ icon }
                        type={ type }
                        size={18}
                        color={color || TEXT_SECONDARY_COLOR}
                    />
                    <Text style={[styles.linkText, {color: color || TEXT_SECONDARY_COLOR}]}>{ title } </Text>
                </View>

                <Icon 
                    name="right"
                    type="antdesign"
                    size={16}
                    color={TEXT_SECONDARY_COLOR}
                />
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    linkTab: {
        marginVertical: 5,
        paddingVertical: 10,
    },
    linkText: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontFamily: 'MavinBold',
        marginLeft: 10,
        color: TEXT_SECONDARY_COLOR
    }
})

export default LinkTab
