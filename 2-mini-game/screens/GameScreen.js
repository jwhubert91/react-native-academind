import { StyleSheet, Text, View, Alert } from "react-native"
import React, { useState, useEffect } from "react"
import Title from "../components/UI/Title"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/UI/PrimaryButton"
import Card from "../components/UI/Card"
import InstructionText from "../components/UI/InstructionText"

// Generate random number logic
function generateRandomNumberBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min

  if (randomNum === exclude) {
    return generateRandomNumberBetween(min, max, exclude)
  } else {
    return randomNum
  }
}

// guess boundaries
let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "I'm sorry!", style: "cancel" },
      ])
      return
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNum = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRandomNum)
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      // game over logic
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  return (
    <View style={styles.screen}>
      {/* GUESS component */}
      <Title titleText={"Opponent's Guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <PrimaryButton
          title="+"
          onButtonPress={nextGuessHandler.bind(this, "greater")}
        />
        <PrimaryButton
          title="-"
          onButtonPress={nextGuessHandler.bind(this, "lower")}
        />
        <View>{/* Log Rounds */}</View>
      </Card>
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
