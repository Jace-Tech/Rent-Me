import { StyleSheet, Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window')

export const globalStyles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        height,
        width,
        backgroundColor: "#fff"
    },

    alignCenter: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    }
})

export const CARD_SIZE_DIVISOR = 2.45