import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import React, { useState } from "react"

const GoalInput = ({ addGoalHandler, endAddGoalHandler, isModalShown }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }
  const goalSubmitHandler = () => {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText("")
  }
  return (
    <Modal visible={isModalShown} animationType="slide">
      <View style={styles.modalInner}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={endAddGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add goal"
              color="#b180f0"
              onPress={goalSubmitHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  modalInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "90%",
    marginRight: 8,
    padding: 16,
    color: "#120438",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "90%",
    marginTop: 10,
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
