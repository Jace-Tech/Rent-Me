import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Container from '../Container'
import { Image } from 'react-native'
import { globalStyles } from '../../utils/globalStyles'
import { BLACK, ORANGE, PRIMARY_COLOR, TEXT_SECONDARY_COLOR, YELLOW } from '../../utils/colors'
import millify from 'millify'

const Stack = ({ data }) => {
    const [currentItem, setCurrentItem] = useState(data[0])


    return (
        <View style={styles.stackContainer}>
            <View style={styles.stackItem}>
                <Image 
                    style={styles.stackImage}
                    source={currentItem.image}
                />
                <View style={{paddingVertical: 10}}>
                    <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                        <Text style={styles.title}>{ currentItem.title }</Text>
                        <Text style={styles.label}>{ currentItem.label }</Text>
                    </View>
                    <View style={[globalStyles.alignCenter, {marginVertical: 5}]}>
                        <Text style={styles.location}>{ currentItem.location }</Text>

                        <Pressable style={{marginLeft: 20}} onPress={() => alert('Show Map')}>
                            <Text style={{fontWeight: '700', color: TEXT_SECONDARY_COLOR}}>Show in Map</Text>
                        </Pressable>
                    </View>
                    <Text style={styles.price}>N { millify(currentItem.price, {lowercase: true}) }/{ currentItem.duration }</Text>
                </View>
            </View>
            <View style={[styles.stackItem, styles.stackLayerTwo]} />
            <View style={[styles.stackItem, styles.stackLayerThree]}/>
        </View>
    )
}

export default Stack

const styles = StyleSheet.create({
    stackContainer: {
        position: 'relative',
        minHeight: 400,
        alignItems: 'center',
        width: '100%',
        padding: 20,
        marginVertical: 10,
        // backgroundColor: 'red'
    },

    label: {
        textTransform: 'capitalize',
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: YELLOW,
        fontSize: 12,
        borderRadius: 4
    },

    title: {
        fontSize: 20,
        fontWeight: '700',
        color: BLACK,
    },      

    location: {
        color: TEXT_SECONDARY_COLOR,
    },     
    
    price: {
        color: ORANGE,
        fontSize: 15
    },

    stackItem: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        height: 385,
        padding: 10,
        zIndex: 5,
        elevation: 10,
        shadowColor: "#000",
        shadowRadius: 10,
        borderRadius: 4,
        overflow: 'hidden',
        shadowOffset: {
            width: 0, 
            height: 15
        },
        shadowOpacity: .5,
    },

    stackLayerTwo: {
        top: 10,
        zIndex: 4,
        opacity: .95,
        backgroundColor: '#eee',
        transform: [
            {scaleX: 0.95}
        ]
    },

    stackLayerThree: {
        top: 40,
        zIndex: 3,
        backgroundColor: '#eee',
        opacity: .8,
        transform: [
            {scale: 0.9}
        ]
    },

    stackImage: {
        flex: 1,
        width: 300,
        resizeMode: 'cover',
        borderRadius: 4,
    },
})