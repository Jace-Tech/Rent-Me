import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { GREEN } from '../../utils/colors'

const RecentItem = ({ image, style, label }) => {
    return (
        <View style={[styles.recentCard, style]}>
            <View style={styles.overlay} />
            <Image style={[styles.image]} source={image} />
            <Text style={[styles.label]}>{ label }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    recentCard: {
        width: (Dimensions.get('screen').width / 2) - 10,
        margin: 5,
        height: 180,
        position: 'relative',
    },

    label: {
        position: 'absolute',
        zIndex: 2,
        padding: 8,
        paddingHorizontal: 15,
        borderRadius: 4,
        top: 10,
        right: 10,
        color: "#fff",
        textTransform: 'capitalize',
        backgroundColor: GREEN
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 4
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, .3)'
    }

})
export default RecentItem
