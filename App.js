import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Row from "./app/components/row";
import Button from "./app/components/button";
import React from "react";

import calculator, { initialState } from "./app/util/calculator";

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <View style={styles.operationContainer}>
            <Text style={styles.operation}>
              {/* {parseFloat(this.state.currentValue).toLocaleString()} */}
              {this.state.previousValue ? this.state.previousValue : null}
              {this.state.operator ? this.state.operator : null}
              {/* {this.state.previousValue}
              {this.state.operator} */}
              {this.state.currentValue}
            </Text>
          </View>
        </View>
        <View style={styles.keyboard}>
          <Row>
            <Button
              theme="tertiary"
              text="AC"
              onPress={() => this.handleTap("AC")}
            ></Button>
            <Button
              theme="tertiary"
              text="Del"
              onPress={() => this.handleTap("Del")}
            ></Button>
            <Button
              theme="tertiary"
              text="+/-"
              onPress={() => this.handleTap("number", "-")}
            ></Button>
            <Button
              theme="secondary"
              text="÷"
              onPress={() => this.handleTap("operator", "/")}
            ></Button>
          </Row>
          <Row>
            <Button
              text="7"
              onPress={() => this.handleTap("number", 7)}
            ></Button>
            <Button
              text="8"
              onPress={() => this.handleTap("number", 8)}
            ></Button>
            <Button
              text="9"
              onPress={() => this.handleTap("number", 9)}
            ></Button>
            <Button
              theme="secondary"
              text="×"
              onPress={() => this.handleTap("operator", "x")}
            ></Button>
          </Row>
          <Row>
            <Button
              text="4"
              onPress={() => this.handleTap("number", 4)}
            ></Button>
            <Button
              text="5"
              onPress={() => this.handleTap("number", 5)}
            ></Button>
            <Button
              text="6"
              onPress={() => this.handleTap("number", 6)}
            ></Button>
            <Button
              theme="secondary"
              text="-"
              onPress={() => this.handleTap("operator", "-")}
            ></Button>
          </Row>
          <Row>
            <Button
              text="1"
              onPress={() => this.handleTap("number", 1)}
            ></Button>
            <Button
              text="2"
              onPress={() => this.handleTap("number", 2)}
            ></Button>
            <Button
              text="3"
              onPress={() => this.handleTap("number", 3)}
            ></Button>
            <Button
              theme="secondary"
              text="+"
              onPress={() => this.handleTap("operator", "+")}
            ></Button>
          </Row>
          <Row>
            <Button
              size="double"
              text="0"
              onPress={() => this.handleTap("number", 0)}
            ></Button>
            <Button
              text="."
              onPress={() => this.handleTap("number", ".")}
            ></Button>
            <Button
              theme="secondary"
              text="="
              onPress={() => this.handleTap("equal")}
            ></Button>
          </Row>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  keyboard: {
    marginBottom: "15%",
    alignSelf: "center",
    width: "92%",
    flex: 1.6,
    backgroundColor: "#000",
    justifyContent: "space-around",
  },
  operation: {
    color: "#fff",
    fontSize: 75,
    textAlign: "right",
  },
  operationContainer: {
    width: "81%",
    height: 100,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 10,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
