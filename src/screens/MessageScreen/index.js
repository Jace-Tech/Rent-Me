import { StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react'
import LoadFont from '../../components/LoadFont'
import HeaderNav from '../../components/HeaderNav'
import { messages } from '../../utils/data'
import Message from '../../components/Message'

const MessageScreen = () => {
    return (
        <LoadFont>
            <HeaderNav title="Message" />
            <View style={{flex: 1}}>
                <FlatList 
                    contentContainerStyle={{flex: 1}}
                    data={messages}
                    keyExtractor={(item) => item.key}
                    renderItem={({item}) => (
                        <Message {...item} />
                    )}
                />
            </View>
        </LoadFont>
    )
}

export default MessageScreen

const styles = StyleSheet.create({})