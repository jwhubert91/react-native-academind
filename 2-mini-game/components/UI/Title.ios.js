import { StyleSheet, Text, Platform } from "react-native"
import React from "react"

// The Platform API can detect the OS
// The built-in select method takes an object that allows you to return different values depending on the OS

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
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
  },
})
