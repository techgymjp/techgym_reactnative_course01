import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { pyramid, deckList, trashList } from "./Cards.js";

export default function App() {
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
                <TouchableOpacity>
                  <Image
                    style={styles.borderStyle}
                    source={pyramid[i][j]["image"]}
                    key={i + "-" + j}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
      <View style={styles.deck_container}>
        <TouchableOpacity>
          <Image style={styles.borderStyle} source={deckList[0]["image"]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.borderStyle}
            source={require("./assets/card_back.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.trash_container}>
        <TouchableOpacity>
          <Image style={styles.borderStyle} source={trashList[0]["image"]} />
        </TouchableOpacity>
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
