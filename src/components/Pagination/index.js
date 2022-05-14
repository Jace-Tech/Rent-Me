import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Pagination = ({ item, _active }) => {
    const [active, setActive] = useState(_active || 0)

    useEffect(() => {
        setActive(_active)
    }, [_active])
    return (
        <View style={styles.pagination}>
            { 
                new Array(item).fill("*").map((_, index) => (
                    <View style={[styles.dots, {borderColor: index == active ? "#fff" : "transparent"}]}>
                        <View style={styles.innerDots}/>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    pagination: {
        position: 'absolute',
        bottom: 250,
        left: 0,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 30,
    },

    dots: {
        width: 15, 
        height: 15,
        marginHorizontal: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
    },

    innerDots: {
        backgroundColor: "#fff",
        width: 6,
        height: 6,
        borderRadius: 10,
    }
})
export default Pagination
