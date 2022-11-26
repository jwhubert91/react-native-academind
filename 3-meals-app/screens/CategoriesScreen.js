import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

function renderCategoryItem({ item, navigation }) {
  function pressHandler() {
    navigation.navigate("MealsOverview")
  }

  const { title, color } = item

  return <CategoryGridTile title={title} color={color} onPress={pressHandler} />
}

// navigation is a prop given to you by the <Stack.Screen /> component
const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
