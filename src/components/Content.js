import { View, Text, Button, Alert } from "react-native";
import SwitchButton from "./ui/SwitchButton";
import MyTextField from "./ui/MyTextField";

export default function Content(props) { 
  const handlePress = (params) => {
    Alert.alert(`The Button was Pressed by ${params}`);
  };

  return (
    <View>
      {props.children}
      <MyTextField title={"Email"} marginTop={15} />
      <MyTextField title={"Password"} />
      <View>
        <Button title="Login" onPress={() => handlePress("Jomar")} />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button title="Signup" />
      </View>
      <View>
        <SwitchButton />
      </View>
    </View>
  );
}
