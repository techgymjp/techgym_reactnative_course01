import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { pyramid, deckList, trashList } from "./Cards.js";

import Trump from "./components/Trump";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {pyramid.map((value, i) => {
        return (
          <View
            key={`${i}`}
            style={{ top: i * -35 + 35, flexDirection: "row" }}
          >
            {value.map((_, j) => {
              return (
                <Trump type={"pyramid"} key={`${i}${j}`} step={i} number={j} />
              );
            })}
          </View>
        );
      })}
      <View style={styles.deck_container}>
        <Trump type={"deck"} source={deckList[count]["image"]} />
        <Trump
          type={"flipButton"}
          countUp={() =>
            setCount((prevCount) => (prevCount + 1) % deckList.length)
          }
        />
      </View>
      <View style={styles.trash_container}>
        <Trump type={"trash"} source={trashList[count]["image"]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button_container: {
    flexDirection: "row",
  },
  deck_container: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  trash_container: {
    flexDirection: "row",
    top: -70,
    alignSelf: "flex-start",
  },
  borderStyle: {
    width: 50,
    height: 70,
  },
});
