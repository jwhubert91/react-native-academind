import { StyleSheet, Text, View, Pressable } from "react-native"
import React from "react"
import Colors from "../../constants/colors"

const PrimaryButton = ({
  title,
  containerAdditionalStyles,
  onButtonPress,
  children,
}) => {
  const containerStyles = [
    styles.buttonOuterContainer,
    containerAdditionalStyles ? containerAdditionalStyles : {},
  ]

  const renderedTitle = title ? (
    <Text style={styles.buttonText}>{title}</Text>
  ) : (
    children
  )

  return (
    <View style={containerStyles}>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }}
        onPress={onButtonPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        {renderedTitle}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonStretch: {
    flex: 1,
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    backgroundColor: Colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
})

export default PrimaryButton
