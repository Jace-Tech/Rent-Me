import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../Container'
import { globalStyles } from '../../utils/globalStyles'
import { useProfile } from '../../contexts/profileContext'
import { Icon } from 'react-native-elements'
import { BLACK, PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '../../utils/colors'

const ProfileSection = () => {
    const {image, pickImage} = useProfile()

    return (
        <ImageBackground source={require('../../bg/bg.png')} style={[globalStyles.alignCenter, styles.hero]}>
            <Container>
                <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                    <View style={{alignSelf: 'flex-end', marginBottom: 20}}>
                        <Text style={styles.profileName}>Jace Alexander</Text>
                        <Text style={styles.username}>@jaceAlex</Text>
                    </View>
                    <View style={styles.avatarBox}>
                        { image ? (
                                <Image style={styles.avatar} source={{uri: image}} />
                            ) : (
                                <Image style={styles.avatar} source={require('../../../assets/jace-png.png')} />
                            )
                        }
                        <Pressable style={styles.camera} onPress={pickImage}>
                            <Icon 
                                name="camera"
                                size={18}
                                type="feather"
                                color="#fff"
                            />
                        </Pressable>
                    </View>
                </View>
            </Container>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    hero: {
        minHeight: 200,
        resizeMode: 'contain',
        justifyContent: 'space-between',
    },

    avatarBox: {
        width: 140,
        height: 150,
        backgroundColor: 'rgb(216,218,211)',
        position: 'relative',
        borderRadius: 4,
    },

    camera: {
        position: 'absolute',
        zIndex: 5,
        bottom: 0,
        right: 0,
        padding: 10,
        borderRadius: 20,
        transform: [
            {translateY: 10},
            {translateX: 5},
        ],
        backgroundColor: PRIMARY_COLOR
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    },

    profileName: {
        fontSize: 20,
        lineHeight: 26.4,
        fontWeight: '700',
        color: BLACK,
    },

    username: {
        color: TEXT_SECONDARY_COLOR, 
        fontSize: 15,
        fontFamily: "MavinBold",
    },
})

export default ProfileSection
