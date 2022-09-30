import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Cards } from "./Cards.js";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.button_container}>
        <TouchableOpacity>
          <Image
            style={styles.borderStyle}
            source={require("./assets/card_club_1.png")}
          />
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
    top: 0,
    alignSelf: "flex-start",
  },
  borderStyle: {
    width: 50,
    height: 70,
  },
});
