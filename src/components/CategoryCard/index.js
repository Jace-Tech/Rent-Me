import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import {PRIMARY_COLOR} from "../../utils/colors"
import React from 'react'
import { Icon } from "react-native-elements"
import { LinearGradient } from 'expo-linear-gradient'

const CategoryCard = ({ image, title, handleChoice, isSelected }) => {
    return (
        <TouchableOpacity style={[styles.categoryCard]} onPress={() => handleChoice(("" + title).toLowerCase())}>
            { 
                isSelected && 
                    (
                        <View style={styles.chosen}>
                            <Text style={styles.chosenText}>
                                <Icon color={PRIMARY_COLOR} size={20} name="check-circle" type="feather" />
                            </Text>
                        </View>
                    )
            }
                <Image source={image} style={styles.cardImage} />
                <LinearGradient locations={[0.7, 0.9, 1]} colors={['rgba(0, 0, 0, .15)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.85)']} style={styles.textOverlay}>
                    <Text style={styles.cardText}>{ title }</Text>
                </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryCard: {
        position: 'relative',
        width: Dimensions.get('screen').width / 2.5,
        overflow: "hidden",
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

    chosen: {
        position: "absolute",
        zIndex: 15,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, .3)'
    },

    chosenText: {
        color: PRIMARY_COLOR,
        transform: [{rotate: '45deg'}],
        position: 'absolute',
        width: '100%',
        right: -55,
        top: -10,
        padding: 15,
        textAlign: 'center',
        fontWeight: '700',
        backgroundColor: '#fff'
    },

    cardImage: {
        width: "100%",
        height: Dimensions.get('screen').height / 4,
        resizeMode: 'cover'
    },

    cardText: {
        fontSize: 16,
        fontFamily: 'MavinBold',
        fontWeight: '500',
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
        // backgroundColor: "rgba(0, 0, 0, .5)"
    },

    imageOverlay: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, .3)'
    },
})

export default CategoryCard
