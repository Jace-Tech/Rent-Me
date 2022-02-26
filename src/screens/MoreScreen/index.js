import React, { useContext } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

import { globalStyles } from '../../utils/globalStyles'
import { BLACK } from '../../utils/colors'

import { MoreContext } from '../../contexts/MoreContext'

import Container from '../../components/Container'
import PropertyCard from '../../components/PropertyCard'
import PageSection from '../../components/Section'
import PropertyCardList from '../../components/PropertyCardList'



const MoreScreen = ({ navigation }) => {
    const { more, moreContent } = useContext(MoreContext)
    return (
        <View style={globalStyles.fullScreen}>
            <View style={{paddingVertical: 15}}>
                <Container>
                    <View style={[globalStyles.alignCenter, {justifyContent: 'space-between'}]}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Icon
                                name="chevron-thin-left" 
                                type="entypo" 
                                color={BLACK}
                                size={24}
                            />
                        </Pressable>

                        <Text style={styles.moreTitle}>{ more }</Text>

                        <Pressable>
                            <Icon 
                                name="ios-search-outline" 
                                type="ionicon"
                                size={24}
                            />
                        </Pressable>
                    </View>
                </Container>
            </View>

            <ScrollView style={{flex: 1}}>
                <View>
                    <Container>
                        <View style={[globalStyles.alignCenter, {flexWrap: 'wrap'}]}>
                            { 
                                moreContent?.map((item, index) => (
                                    <PropertyCard 
                                        {...item}
                                        key={item.title + "-" + index}
                                    />
                                ))
                            }
                        </View>
                    </Container>
                </View>

                <PageSection title="Best Prices for Shikinni Money">
                    <PropertyCardList />
                </PageSection>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    moreTitle: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        fontWeight: '700',
    }
})

export default MoreScreen
