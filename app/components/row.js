import React from "react";
import { View, StyleSheet } from "react-native";

function row({ children }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {children}
    </View>
  );
}

export default row;
