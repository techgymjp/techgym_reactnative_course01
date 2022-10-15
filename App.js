import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { pyramid, deckList, trashList } from "./Cards.js";

import Trump from "./components/Trump";

export default function App() {
  const [count, setCount] = useState(0);
  const [isClicked, setIsclicked] = useState({
    position: null,
    number: 0,
  });
  const countUpAndReset = () => {
    setCount((prevCount) => (prevCount + 1) % deckList.length);
    if (isClicked.position === "deck") {
      setIsclicked((state) => ({
        ...state,
        position: "trash",
      }));
    } else if (isClicked.position === "trash") {
      setIsclicked({
        position: null,
        number: 0,
      });
    }
  };

  function pyramidClicked(index) {
    let splitarray = index.split("").map(Number);
    let clickednumber = pyramid[splitarray[0]][splitarray[1]]["number"];
    let nextPosition = null;
    let nextNumber = 0;
    if (clickednumber === 13) {
      pyramid[splitarray[0]][splitarray[1]] = {
        isdeleted: true,
      };
    } else if (clickednumber + isClicked.number === 13) {
      pyramid[splitarray[0]][splitarray[1]] = {
        isdeleted: true,
      };
      let splitposition = isClicked.position.split("");
      pyramid[splitposition[0]][splitposition[1]] = {
        isdeleted: true,
      };
    } else {
      nextPosition = index;
      nextNumber = clickednumber;
    }
    setIsclicked({
      position: nextPosition,
      number: nextNumber,
    });
  }

  return (
    <View style={styles.container}>
      {pyramid.map((value, i) => {
        return (
          <View
            key={`${i}`}
            style={{ top: i * -35 + 35, flexDirection: "row" }}
            pointerEvents="box-none"
          >
            {value.map((_, j) => {
              return (
                <Trump
                  type={"pyramid"}
                  key={`${i}${j}`}
                  step={i}
                  number={j}
                  onPress={() => pyramidClicked(`${i}${j}`)}
                  nowPosition={isClicked.position}
                />
              );
            })}
          </View>
        );
      })}
      <View style={styles.deck_container}>
        <Trump
          type={"deck"}
          source={deckList[count]["image"]}
          onPress={() =>
            setIsclicked({
              position: "deck",
              number: deckList[count]["number"],
            })
          }
          nowPosition={isClicked.position}
        />
        <Trump type={"flipButton"} countUp={countUpAndReset} />
      </View>
      <View style={styles.trash_container}>
        <Trump
          type={"trash"}
          source={trashList[count]["image"]}
          onPress={() =>
            setIsclicked({
              position: "trash",
              number: trashList[count]["number"],
            })
          }
          nowPosition={isClicked.position}
        />
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
