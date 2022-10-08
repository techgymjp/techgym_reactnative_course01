import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { pyramid } from "../Cards.js";

export default function Trump(props) {
  if (props.type === "pyramid") {
    return (
      <TouchableOpacity>
        <Image
          style={styles.borderStyle}
          source={pyramid[props.step][props.number]["image"]}
          key={props.level + "-" + props.number}
        />
      </TouchableOpacity>
    );
  } else if (props.type === "deck") {
    return (
      <TouchableOpacity>
        <Image style={styles.borderStyle} source={props.source} />
      </TouchableOpacity>
    );
  } else if (props.type === "flipButton") {
    return (
      <TouchableOpacity onPress={props.countUp}>
        <Image
          style={styles.borderStyle}
          source={require("../assets/card_back.png")}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity>
        <Image style={styles.borderStyle} source={props.source} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  borderStyle: {
    width: 50,
    height: 70,
  },
});
