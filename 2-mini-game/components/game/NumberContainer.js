import { StyleSheet, Text, View } from "react-native"
import React from "react"
import {} from "../../constants/colors"

const NumberContainer = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors,
  },
  numberText: {},
})
