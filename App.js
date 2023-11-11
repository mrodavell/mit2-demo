import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context"; 

export default function App() {

  return ( 
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}> 
        <Text>Test State Management</Text>
      </SafeAreaView> 
  );
}
