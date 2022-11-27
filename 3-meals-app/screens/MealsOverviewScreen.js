import { StyleSheet, View, FlatList, Text } from "react-native"
import React, { useLayoutEffect } from "react"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"

const MealsOverviewScreen = ({ route, navigation }) => {
  // The route prop is available as a prop because this screen is registered in a Stack.Screen component
  // In nested components where some parents are in Stack.Screen you can use the useRoute hook :)
  const catId = route.params.categoryId
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  function renderMealItem({ item }) {
    const mealItemProps = {
      title: item.title,
      id: item.id,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    }
    return <MealItem {...mealItemProps} />
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId
    }).title

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [catId, navigation])

  return (
    <View>
      <Text>Meals Overview</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
