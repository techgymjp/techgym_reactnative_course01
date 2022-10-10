import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { pyramid } from "../Cards.js";

export default function Trump(props) {
  if (props.type === "pyramid") {
    let borderStyle = { width: 50, height: 70 };
    const thisposition = String(props.step) + String(props.number);
    if (thisposition === props.nowPosition) {
      borderStyle.borderColor = "deepskyblue";
      borderStyle.borderWidth = 2;
    }
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={borderStyle}
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
