import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { pyramid } from "./Cards.js";

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
    top: 0,
  },
  borderStyle: {
    width: 50,
    height: 70,
  },
});
