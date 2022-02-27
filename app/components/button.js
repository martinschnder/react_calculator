import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

function button({ text, theme, size, onPress }) {
  const buttonStyle = [styles.button];
  const textStyle = [styles.text];

  if (theme === "secondary") {
    buttonStyle.push(styles.buttonSecondary);
  }
  if (theme === "tertiary") {
    buttonStyle.push(styles.buttonTertiary);
    textStyle.push(styles.textTertiary);
  }

  if (size === "double") {
    buttonStyle.push(styles.buttonDouble);
  }
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

export default button;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#212121",
    borderRadius: 40,
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: "#F69906",
  },
  buttonTertiary: {
    backgroundColor: "#757575",
  },
  buttonDouble: {
    width: 140 + (Dimensions.get("window").width * 0.92 - 280) / 4,
    alignItems: "flex-start",
    paddingLeft: 27,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 30,
  },
  textTertiary: {
    color: "#000",
  },
});
