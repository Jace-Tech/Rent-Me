import React, { useState } from 'react'
import { Image, Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { BLACK, PRIMARY_COLOR, RED, TEXT_SECONDARY_COLOR } from '../../utils/colors'
import { globalStyles } from '../../utils/globalStyles'
import Container from '../Container'

const Message = ({ image, name, message, isRead }) => {
    const [read, setRead] = useState(isRead)

    return (
        <Pressable onPress={() => setRead(false)} style={[styles.messageContainer]}>
            <View style={[styles.messageBox]}>
                <Container>
                    <View style={[globalStyles.alignCenter, {alignItems: 'stretch'}]}>
                        <Image 
                            source={image}
                            style={styles.avatar}
                        />
                        <View style={{flex: 1}}>
                            <Text style={styles.name}>{ name }</Text>
                            <Text style={[styles.messageText, read && styles.notRead]}>
                                { `${("" + message).substring(0, 25)}...`  }
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.time}>5 mins ago</Text>
                            {
                                read && (
                                    <View style={styles.count}>
                                        <Text style={styles.countText}>3</Text>
                                    </View>
                                )
                            }
                            
                        </View>
                    </View>
                </Container>
            </View>

            <View style={[globalStyles.alignCenter,styles.deleteBox]}>
                <Icon
                    name="trash"
                    type="ionicon"
                    color="#fff"
                />

                <Icon
                    name="trash"
                    type="ionicon"
                    color="#fff"
                />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    messageContainer: {
        position: 'relative',
        flexDirection: 'row',
    },

    name: {
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 24,
        color: BLACK,
    },

    messageBox: {
        position: 'relative',
        paddingVertical: 8, 
        flex: 1,
        zIndex: 3,
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },

    messageText: {
        color: TEXT_SECONDARY_COLOR
    },

    notRead: {
        color: BLACK
    },

    avatar: {
        width: 45, 
        height: 44, 
        resizeMode: 'contain',
        marginRight: 12,
    },

    time: {
        color: TEXT_SECONDARY_COLOR, 
        lineHeight: 24
    },

    count: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: PRIMARY_COLOR,
        alignSelf: 'flex-end'
    },

    countText: {
        color: "#fff", 
        fontSize: 10,
        fontWeight: '700', 
        flex: 1, 
        justifyContent: "center"
    },

    deleteBox:  {
        position:"absolute",
        backgroundColor: RED , 
        padding: 10,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        flex: 1
    }
})
export default Message
