import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import { BLACK } from '../../utils/colors'
import { globalStyles } from '../../utils/globalStyles'
import { Icon } from 'react-native-elements'

const PageSection = ({ children, style, title, handleClick, linkLess }) => {
    return (
        <View style={[styles.pageSection, style && style]}>
            <Container>
                <View style={[globalStyles.alignCenter, {justifyContent: 'space-between', marginBottom: 10}]}>
                    <Text style={styles.pageTitle}>{ title || "Page Title" }</Text>

                    { 
                        !linkLess && 
                            (

                                <Pressable style={styles.more} onPress={handleClick}>
                                    <Icon 
                                        name="dots-two-horizontal" 
                                        type="entypo" 
                                    />
                                </Pressable>
                            )
                    }
                </View>
                { children }
            </Container>
        </View>
    )
}

export default PageSection

const styles = StyleSheet.create({
    pageSection: {
        marginVertical: 10
    },
    more: {
        padding: 10,
    },
    pageTitle: {
        fontSize: 20,
        color: BLACK,
        fontWeight: '700',
    }
})