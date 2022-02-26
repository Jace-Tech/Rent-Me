import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, TouchableOpacity, Dimensions, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {PRIMARY_COLOR, YELLOW} from "../../utils/colors"
import millify from 'millify'



const PropertyCard = ({ image, label, price, title, duration, location, handleClick }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={[styles.propertyCard]} onPress={handleClick}>
            <Text style={styles.label}>{label && label}</Text>
            <Image source={image && image} style={styles.cardImage} />
            <LinearGradient locations={[0.5, 0.9, 1]} colors={['rgba(0, 0, 0, .15)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.85)']} style={styles.textOverlay}>
                <Text style={styles.propName}>{ title && title }</Text>
                <Text style={[styles.cardText, styles.propLocation]}>{ location && location }</Text>
                <Text style={[styles.cardText, styles.propPrice]}>
                    &#8358;{ price && ` ${millify(price, {lowercase: true})}/per ${duration}`}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default PropertyCard

const styles = StyleSheet.create({
    propertyCard: {
        position: 'relative',
        // width: Dimensions.get('screen').width / 2.4,
        width: 146,
        overflow: "hidden",
        height: 210,
        margin: 8,
        borderRadius: 5,
        elevation: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowRadius: 10
    },

    label: {
        paddingVertical: 7,
        textTransform: 'capitalize',
        paddingHorizontal: 15,
        position: "absolute",
        zIndex: 8,
        right: 13,
        top: 10,
        backgroundColor: YELLOW,
        fontSize: 12,
        borderRadius: 5

    },

    cardImage: {
        width: "100%",
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'cover'
    },

    cardText: {
        fontSize: 13,
        fontWeight: '600',
        color: "#fff",
    },

    textOverlay: {
        position: "absolute",
        left: 0,
        bottom: 0,
        top: 0,
        justifyContent: 'flex-end',
        right: 0,
        zIndex: 6,
        padding: 10,
    },

    propLocation: {
        fontWeight: '300',
        opacity: .7, 
        fontSize: 11
    },

    propPrice: {
        fontSize: 12,
    },

    propName: {
        fontWeight: '700',
        color: "#fff",
        fontSize: 16
    }
})