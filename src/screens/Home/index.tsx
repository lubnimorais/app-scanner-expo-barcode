import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('QRCodeScreen');
      }}>
        <Text>QRCode</Text>
      </TouchableOpacity>
    </View>
  )
}

export { HomeScreen };