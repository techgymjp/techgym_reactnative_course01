import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { pyramid } from "../Cards.js";

export default function Trump(props) {
  return (
    <TouchableOpacity>
      <Image
        style={styles.borderStyle}
        source={pyramid[props.step][props.number]["image"]}
        key={props.level + "-" + props.number}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  borderStyle: {
    width: 50,
    height: 70,
  },
});
