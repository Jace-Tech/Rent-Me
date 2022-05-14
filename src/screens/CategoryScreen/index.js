import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { PRIMARY_COLOR, TEXT_PRIMARY_COLOR } from '../../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, removeCategory } from "../../store/slices/categorySlice"

import Container from '../../components/Container'
import CategoryCard from '../../components/CategoryCard'
import CustomButton from '../../components/Button'
import LoadFont from '../../components/LoadFont'

const CategoryScreen = ({ navigation }) => {
    const [isSelected, setIsSelected] = useState({
        rent: false,
        hire: false,
        lease: false,
        shortlet: false,
    })

    const dispatch = useDispatch()
    const selectedCategories = useSelector(state => state.category.category)


    const handleChoice = (category) => {
        if(selectedCategories.includes(category)){
            setIsSelected(prev => ({...prev, [category]: false}))
            dispatch(removeCategory(category))
        }
        else{
            setIsSelected(prev => ({...prev, [category]: true}))
            dispatch(addCategory(category))
        }
    }

    const handleClick = () => {
        if(selectedCategories.length){
            navigation.navigate('Home')
        }
    }

    const categories = [
        {
            title: "Hire",
            image: require('../../../assets/house/house1.jpg'),
            isSelected: isSelected.hire
        },
        {
            title: "Rent",
            image: require('../../../assets/house/house2.jpg'),
            isSelected: isSelected.rent
        },
        {
            title: "Shortlet",
            image: require('../../../assets/house/house3.jpg'),
            isSelected: isSelected.shortlet
        },
        {
            title: "Lease",
            image: require('../../../assets/house/house4.jpg'),
            isSelected: isSelected.lease
        },
    ]

    return (
        <>
            <StatusBar />
            <LoadFont style={{flex: 1}}>

                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{marginBottom: 20, marginTop: 30}}>
                        <Container>
                            <Text style={styles.pageTitle}>Select Category</Text>
                            <Text style={styles.pageSubtitle}>You can select more than a category</Text>
                        </Container>
                    </View>

                    <View style={{ flex: 1}}>
                        <Container>
                            <View style={styles.categoryWrapper}>
                                <CategoryCard 
                                    title={categories[0].title}
                                    image={categories[0].image}
                                    handleChoice={handleChoice}
                                    isSelected={isSelected.hire}
                                />
                                
                                <CategoryCard 
                                    title={categories[1].title}
                                    image={categories[1].image}
                                    handleChoice={handleChoice}
                                    isSelected={isSelected.rent}
                                />

                                <CategoryCard 
                                    title={categories[2].title}
                                    image={categories[2].image}
                                    handleChoice={handleChoice}
                                    isSelected={isSelected.shortlet}
                                />

                                <CategoryCard 
                                    title={categories[3].title}
                                    image={categories[3].image}
                                    handleChoice={handleChoice}
                                    isSelected={isSelected.lease}
                                />
                            </View>
                        </Container>
                    </View>

                    <View style={{ marginBottom: 50 }}>
                        <Container>
                            <CustomButton handleClick={handleClick} disabled={!selectedCategories.length} text="continue" color={PRIMARY_COLOR} />
                        </Container>
                    </View>
                </SafeAreaView>
            </LoadFont>
        </>
    )
}


const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 28,
        fontWeight: "700",
        color: TEXT_PRIMARY_COLOR
    },

    categoryWrapper: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        
    },
    
    pageSubtitle: {
        fontSize: 16,
        fontFamily: "MavinBold",
        fontWeight: "400",
        marginTop: 5,
        color: TEXT_PRIMARY_COLOR
    },
})

export default CategoryScreen
