import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const RentalCard = ({ handleClick, service, text, image }) => {
    return (
        <TouchableOpacity style={[styles.rentalCard]} onPress={handleClick}>
            <Image source={ image } style={styles.cardImage} />
            <LinearGradient locations={[0.5, 0.9, 1]} colors={['rgba(0, 0, 0, .15)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.85)']} style={styles.textOverlay}>
                <Text style={styles.serviceTitle}>{ service }</Text>
                <Text style={[styles.cardText, styles.propLocation]}> {text} </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    rentalCard: {
        position: 'relative',
        // width: Dimensions.get('screen').width / 2.4,
        width: 130,
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

    serviceTitle: {
        fontWeight: '700',
        textTransform: 'capitalize',
        color: "#fff",
        marginBottom: 5,
        fontSize: 16
    }
})
export default RentalCard
