import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Divider(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080"
  }
});

export default Divider;
