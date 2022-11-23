import { useState } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import Colors from "./constants/colors"
import GameOverScreen from "./screens/GameOverScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(false)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  function gameOverHandler() {
    setIsGameOver(true)
  }

  let screenChildren = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screenChildren = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    )
  }

  if (isGameOver && userNumber) {
    screenChildren = <GameOverScreen />
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screenChildren}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
