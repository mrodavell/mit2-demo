import { View, Image } from "react-native";
import Logo from "../../assets/ustp.png";

export default function Header() {
  return (
    <View>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
    </View>
  );
}
