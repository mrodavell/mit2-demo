import { View, TextInput, Button, StyleSheet } from "react-native";
export default function Content() {
  return (
    <View>
      <View style={{ marginTop: 15 }}>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <View>
        <TextInput placeholder="Password" style={styles.textInput} />
      </View>
      <View>
        <Button title="Login" />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button title="Sigup" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    width: 250,
    height: 50,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
