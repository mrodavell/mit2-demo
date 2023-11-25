import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Header from "../Header";

export default function SignupForm({ navigation }) {
  return (
    <View style={{ flex: 1, width: 300, justifyContent: "center" }}>
      <Header />
      <TextInput
        label="Email"
        placeholder="Email"
        style={{ marginBottom: 5, marginTop: 10 }}
      />
      <TextInput label="Password" placeholder="Password" secureTextEntry />
      <TextInput
        label="Re-type Password"
        placeholder="Re-type Password"
        secureTextEntry
        style={{ marginTop: 5 }}
      />
      <View style={{ marginTop: 5, flexDirection: "column" }}>
        <Button
          icon="account-plus"
          mode="contained"
          onPress={() => console.log("Sign up")}
          uppercase
          style={{ marginTop: 10 }}
        >
          Signup
        </Button>
        <Button
          icon="arrow-left-thin"
          mode="contained"
          onPress={() => navigation.popToTop()}
          uppercase
          style={{ marginTop: 10 }}
        >
          Go Back
        </Button>
      </View>
    </View>
  );
}
