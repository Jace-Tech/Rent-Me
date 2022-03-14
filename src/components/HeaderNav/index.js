import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import { BLACK, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../utils/globalStyles'
import { Icon } from 'react-native-elements'

const HeaderNav = ({ title, style }) => {
    const navigation = useNavigation()

    return (
        <View style={[{paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#eee"}, style]}>
            <Container>
                <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Icon
                            name="chevron-thin-left" 
                            type="entypo" 
                            color={BLACK}
                            size={20}
                        />
                    </Pressable>

                    <Text style={styles.detailTitle}>{title}</Text>
                </View>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    detailTitle: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        fontWeight: '700',
    },

})

export default HeaderNav
