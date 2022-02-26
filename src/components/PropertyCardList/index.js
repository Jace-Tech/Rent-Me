import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BLACK, TEXT_SECONDARY_COLOR } from '../../utils/colors'

const PropertyCardList = ({ }) => {
    return (
        <Pressable onPress={() => alert("Details")} style={styles.cardContainer}>
            <Image style={styles.cardImage} source={require('../../../assets/house/house1.jpg')} />

            <View style={{marginLeft: 15}}>
                <Text style={styles.cardTitle}>Deri's Apartment</Text>
                <Text style={styles.cardLocation}>Garriki, Enugu State</Text>
                <Text style={styles.cardAccessory}>2 Bathrooms  2 Bedrooms</Text>
                <Text style={styles.cardPrice}>N 21,000.00/per month</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'capitalize',
        color: BLACK,
        lineHeight: 24,
    },

    cardLocation: {
        color: TEXT_SECONDARY_COLOR,
        lineHeight: 24,
    },

    cardAccessory: {
        color: TEXT_SECONDARY_COLOR,
        lineHeight: 24,
    },

    cardPrice: {
        color: BLACK,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '700'
    },
    
})

export default PropertyCardList
