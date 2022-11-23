import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import Title from "../components/UI/Title"

function generateRandomNumberBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude)
  } else {
    return randomNum
  }
}

const GameScreen = ({ userNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 100, userNumber)
  )
  return (
    <View style={styles.screen}>
      {/* GUESS component */}
      <Title titleText={"Opponent's Guess"} />
      <View>
        <Text>Higher or lower?</Text>
        {/* + and - buttons */}
        <View>{/* Log Rounds */}</View>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
