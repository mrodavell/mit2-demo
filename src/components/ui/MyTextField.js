import { View, TextInput } from "react-native";
import React from "react";

export default function MyTextField(props) {
  const { title, marginTop } = props;

  return (
    <View>
      <TextInput
        placeholder={title}
        style={{
          marginTop: marginTop,
          borderWidth: 1,
          width: 250,
          height: 50,
          paddingLeft: 10,
          marginBottom: 10,
        }}
      />
    </View>
  );
}
