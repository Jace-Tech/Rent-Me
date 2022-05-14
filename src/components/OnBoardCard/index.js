import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import CustomButton from '../Button'

const OnBoardCard = ({ image, title, text, isLast, handleDone }) => {
    return (
        <View style={styles.onBoardCard}>
            <ImageBackground source={image} style={styles.cardImage}>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardText}>{ text }</Text>
                    
                    <View style={styles.doneBtnContainer}>
                        <CustomButton handleClick={handleDone} disabled={!isLast} text={"Done"} color={PRIMARY_COLOR} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    onBoardCard: {
        flex: 1,
        position: 'relative',
    },

    cardImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        display: 'flex',
        justifyContent: "flex-end"
    },

    cardBody: {
        width: "100%",
        position: 'relative',
        minHeight: 200,
        backgroundColor: "#fff",
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    cardTitle: {
        textAlign: "center",
        fontFamily: "MavinBold",
        fontSize: 26,
        marginVertical: 15,
    },

    cardText: {
        fontSize: 15,
        color: TEXT_SECONDARY_COLOR, 
        textAlign: 'center',
        lineHeight: 24
    },

    doneBtnContainer: {
        marginVertical: 24,
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default OnBoardCard
