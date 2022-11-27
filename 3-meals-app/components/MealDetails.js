import { StyleSheet, Text, View } from "react-native"
import React from "react"

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>
        Duration: {duration} mins
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        Complexity: {complexity}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        Affordability: {affordability}
      </Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    textTransform: "capitalize",
  },
})
