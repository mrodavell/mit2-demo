import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Header from "./Header";
export default function Content() {
  return (
    <View style={{ flex: 1, width: 300, justifyContent: "center" }}>
      <Header />
      <TextInput
        label="Email"
        placeholder="Email"
        style={{ marginBottom: 5, marginTop: 10 }}
      />
      <TextInput label="Password" placeholder="Password" secureTextEntry />
      <Button
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
        uppercase
        style={{ marginTop: 10 }}
      >
        Login
      </Button>
      <View style={{ marginTop: 5 }}>
        <Button title="Sigup" labelStyle={{ margin: 10 }} />
      </View>
    </View>
  );
}
