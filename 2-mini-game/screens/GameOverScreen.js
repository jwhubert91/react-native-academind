import { StyleSheet, Text, View, Image, Dimensions } from "react-native"
import React from "react"
import Colors from "../constants/colors"
import PrimaryButton from "../components/UI/PrimaryButton"

const GameOverScreen = ({ roundsCount, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Text>GAME OVER!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsCount}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton title="Start new game" onButtonPress={onStartNewGame} />
    </View>
  )
}

export default GameOverScreen

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
})
