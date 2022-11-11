import { useState } from "react"
import { StyleSheet, View, FlatList, Text, Button } from "react-native"
import { StatusBar } from "expo-status-bar"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

// Note: All View components by default use flexbox in React Native

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isModalShown, setIsModalShown] = useState(false)
  const endAddGoalHandler = () => {
    setIsModalShown(false)
  }
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((item) => item.id !== id)
    })
  }
  const toggleModalHandler = () => {
    setIsModalShown((prevBool) => !prevBool)
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#a065ec"
          onPress={toggleModalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
          isModalShown={isModalShown}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item) => {
              return item.id
            }}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
    color: "white",
  },
  goalsContainer: {
    flex: 6,
  },
})
