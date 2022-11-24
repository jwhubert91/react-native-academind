import { useState } from "react"
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import GameScreen from "./screens/GameScreen"
import Colors from "./constants/colors"
import GameOverScreen from "./screens/GameOverScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(false)
  const [roundsCount, setRoundsCount] = useState(0)

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setIsGameOver(false)
  }

  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true)
    setRoundsCount(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null)
    setRoundsCount(0)
  }

  let screenChildren = <StartGameScreen onPickedNumber={pickedNumberHandler} />

  if (userNumber) {
    screenChildren = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    )
  }

  if (isGameOver && userNumber) {
    screenChildren = (
      <GameOverScreen
        userNumber={userNumber}
        roundsCount={roundsCount}
        onStartNewGame={startNewGameHandler}
      />
    )
  }

  if (!fontsLoaded) {
    return <AppLoading />
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
