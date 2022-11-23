import { StyleSheet, View } from "react-native"
import React from "react"
import Colors from "../../constants/colors"

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    // elevation is an Android-only property
    elevation: 4,
    // shadow properties are iOS-only
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
})
