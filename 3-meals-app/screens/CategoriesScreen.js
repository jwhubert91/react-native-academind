import { StyleSheet, FlatList } from "react-native"
import React from "react"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

// navigation is a prop given to you by the <Stack.Screen /> component
const CategoriesScreen = ({ navigation }) => {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: id,
      })
    }

    const { title, color, id } = item

    return (
      <CategoryGridTile title={title} color={color} onPress={pressHandler} />
    )
  }

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
