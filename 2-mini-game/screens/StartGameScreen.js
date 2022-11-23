import { Alert, StyleSheet, TextInput, View, Text } from "react-native"
import React, { useState } from "react"
import PrimaryButton from "../components/UI/PrimaryButton"
import Colors from "../constants/colors"
import Title from "../components/UI/Title"
import Card from "../components/UI/Card"
import InstructionText from "../components/UI/InstructionText"

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("")

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber("")
  }

  function confirmInputHandler() {
    const chosenInteger = parseInt(enteredNumber)
    if (isNaN(chosenInteger) || chosenInteger <= 0 || chosenInteger > 99) {
      // show alert
      Alert.alert("Invalid number", "Number must be between 1 - 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ])
      return
    }
    onPickedNumber(chosenInteger)
  }

  return (
    <View style={styles.rootContainer}>
      <Title titleText={"Guess my number!"} />
      <Card>
        <InstructionText>Enter a number:</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          // https://reactnative.dev/docs/textinput#keyboardtype
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Reset"
            containerAdditionalStyles={{ flex: 1 }}
            onButtonPress={resetInputHandler}
          />
          <PrimaryButton
            title="Confirm"
            containerAdditionalStyles={{ flex: 1 }}
            onButtonPress={confirmInputHandler}
          />
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 70,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
})
