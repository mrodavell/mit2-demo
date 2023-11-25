import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../page/LoginPage";
import SignupPage from "../page/SignupPage";
import HomePage from "../page/HomePage";

const Stack = createNativeStackNavigator();

export default function NavigationStack(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Signup"
          component={SignupPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
