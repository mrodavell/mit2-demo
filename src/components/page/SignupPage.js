import { View, Text } from "react-native";
import SignupForm from "../forms/SignupForm";

export default function SignupPage(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SignupForm {...props} />
    </View>
  );
}
