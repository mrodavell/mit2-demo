import { View, Image } from "react-native";
import Logo from "../../assets/ustp.png";

export default function Header() {
  return (
    <View style={{ alignItems: "center", marginBottom: 10 }}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
    </View>
  );
}
