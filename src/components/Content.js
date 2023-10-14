import { View, TextInput, Button } from "react-native";
import SwitchButton from "./ui/SwitchButton";

export default function Content() {
  return (
    <View>
      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          width: 250,
          marginTop: 15,
          height: 50,
          paddingLeft: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        style={{
          borderWidth: 1,
          width: 250,
          height: 50,
          paddingLeft: 10,
          marginBottom: 10,
        }}
      />
      <View>
        <Button title="Login" />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button title="Sigup" />
      </View>
      <View>
        <SwitchButton />
      </View>
    </View>
  );
}
