import { View, Text, StyleSheet, Pressable } from "react-native"
import React from "react"

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 5,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
})
