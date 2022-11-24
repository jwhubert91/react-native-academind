import { StyleSheet, View, Alert, FlatList } from "react-native"
import React, { useState, useEffect } from "react"
import { Ionicons } from "@expo/vector-icons"
import Title from "../components/UI/Title"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/UI/PrimaryButton"
import Card from "../components/UI/Card"
import InstructionText from "../components/UI/InstructionText"
import GuessLogItem from "../components/game/GuessLogItem"

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
  const [guessRounds, setGuessRounds] = useState([initialGuess])

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
    setGuessRounds((prev) => [newRandomNum, ...prev])
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      // game over logic
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      {/* GUESS component */}
      <Title titleText={"Opponent's Guess"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            onButtonPress={nextGuessHandler.bind(this, "lower")}
            containerAdditionalStyles={{ flex: 1 }}
          >
            <Ionicons
              name="md-remove"
              color="white"
              size={24}
              style={styles.buttonIcon}
            />
          </PrimaryButton>
          <PrimaryButton
            onButtonPress={nextGuessHandler.bind(this, "greater")}
            containerAdditionalStyles={{ flex: 1 }}
          >
            <Ionicons
              name="md-add"
              color="white"
              size={24}
              style={styles.buttonIcon}
            />
          </PrimaryButton>
        </View>
        <View>{/* Log Rounds */}</View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              guess={itemData.item}
              roundNumber={guessRoundsListLength - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
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
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonIcon: {
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})
