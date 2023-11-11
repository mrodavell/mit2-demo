import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Header from "../Header";

export default function LoginForm({ navigation }) {

  const doLogin = () => {
    // check credentials
    navigation.navigate("Home")
  }

  return (
    <View style={{ flex: 1, width: 300, justifyContent: "center" }}>
      <Header />
      <TextInput
        label="Email"
        placeholder="Email"
        style={{ marginBottom: 5, marginTop: 10 }}
      />
      <TextInput label="Password" placeholder="Password" secureTextEntry />
      <View style={{ marginTop: 5, flexDirection: "column" }}>
        <Button
          icon="login"
          mode="contained"
          onPress={() => doLogin()}
          uppercase
          style={{ marginTop: 10 }}
        >
          Login
        </Button>
        <Button
          icon="account-plus"
          mode="contained"
          onPress={() => navigation.navigate("Signup")}
          uppercase
          style={{ marginTop: 10 }}
        >
          Signup
        </Button>
      </View>
    </View>
  );
}
