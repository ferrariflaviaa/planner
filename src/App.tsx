import "../src/styles/global.css";
import { Image, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import IndexApp from "./app";
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Loading } from "./components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-zinc-950">
      <StatusBar
        // barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <IndexApp />
    </View>
  );
}
