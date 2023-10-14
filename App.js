import { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleTextChange = (newtext) => {
    console.debug(newtext);
    setText(newtext);
  };

  return (
    <View style={styles.box}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 30 }}>Counter: {count}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Button title={"Increment++"} onPress={increment} />
        </View>
        <Button title={"Decrement--"} onPress={decrement} />
      </View>
      <View>
        <TextInput
          onChangeText={handleTextChange}
          placeholder="Enter Text"
          style={{ borderWidth: 1, margin: 10, width: 200, paddingLeft: 5 }}
        />
        <Text>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
});
