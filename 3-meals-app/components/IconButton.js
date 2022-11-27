import { StyleSheet, Text, View, Pressable } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({ iconName, iconColor, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={iconName} size={24} color={iconColor} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})
