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

  function isclickable(level, number) {
    if (level === 6) {
      return true;
    } else {
      let leftNumber = number;
      let rightNumber = number + 1;
      return (
        pyramid[level + 1][leftNumber]["isdeleted"] &&
        pyramid[level + 1][rightNumber]["isdeleted"]
      );
    }
  }

  function pyramidClicked(index) {
    let splitarray = index.split("").map(Number);
    let clickednumber = pyramid[splitarray[0]][splitarray[1]]["number"];
    let nextPosition = null;
    let nextNumber = 0;
    if (!isclickable(splitarray[0], splitarray[1])) {
      return;
    }
    if (clickednumber === 13) {
      pyramid[splitarray[0]][splitarray[1]] = {
        isdeleted: true,
      };
    } else if (clickednumber + isClicked.number === 13) {
      pyramid[splitarray[0]][splitarray[1]] = {
        isdeleted: true,
      };
      if (isClicked.position === "deck") {
        deckList.splice(count, 1);
        trashList.splice(count + 1, 1);
      } else if (isClicked.position === "trash") {
        deckList.splice(count - 1, 1);
        trashList.splice(count, 1);
        setCount((prevCount) => prevCount - 1);
      } else {
        let splitposition = isClicked.position.split("");
        pyramid[splitposition[0]][splitposition[1]] = {
          isdeleted: true,
        };
      }
    } else {
      nextPosition = index;
      nextNumber = clickednumber;
    }
    setIsclicked({
      position: nextPosition,
      number: nextNumber,
    });
  }

  function deckAndTrashClicked(index) {
    let splitposition =
      isNaN(isClicked.position) || isClicked.position == null
        ? null
        : isClicked.position.split("").map(Number);
    let nextPosition = null;
    let nextNumber = 0;
    if (index === "deck") {
      if (deckList[count]["number"] === 13) {
        deckList.splice(count, 1);
        trashList.splice(count + 1, 1);
      } else if (deckList[count]["number"] + isClicked.number === 13) {
        deckList.splice(count, 1);
        trashList.splice(count + 1, 1);
        if (isClicked.position === "trash") {
          deckList.splice(count - 1, 1);
          trashList.splice(count, 1);
          setCount((prevCount) => prevCount - 1);
        } else {
          pyramid[splitposition[0]][splitposition[1]] = {
            isdeleted: true,
          };
        }
      } else {
        nextPosition = index;
        nextNumber = deckList[count]["number"];
      }
    } else {
      if (trashList[count]["number"] === 13) {
        deckList.splice(count - 1, 1);
        trashList.splice(count, 1);
        setCount((prevCount) => prevCount - 1);
      } else if (trashList[count]["number"] + isClicked.number === 13) {
        if (isClicked.position === "deck") {
          deckList.splice(count - 1, 2);
          trashList.splice(count, 2);
          setCount((prevCount) => prevCount - 1);
        } else {
          deckList.splice(count - 1, 1);
          trashList.splice(count, 1);
          pyramid[splitposition[0]][splitposition[1]] = {
            isdeleted: true,
          };
          setCount((prevCount) => prevCount - 1);
        }
      } else {
        nextPosition = index;
        nextNumber = trashList[count]["number"];
      }
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
          onPress={() => deckAndTrashClicked("deck")}
          nowPosition={isClicked.position}
        />
        <Trump type={"flipButton"} countUp={countUpAndReset} />
      </View>
      <View style={styles.trash_container}>
        <Trump
          type={"trash"}
          source={trashList[count]["image"]}
          onPress={() => deckAndTrashClicked("trash")}
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
