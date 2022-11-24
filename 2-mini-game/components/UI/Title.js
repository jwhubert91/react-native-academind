import { StyleSheet, Text } from "react-native"
import React from "react"

const Title = ({ titleText }) => {
  return <Text style={styles.title}>{titleText}</Text>
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
})
