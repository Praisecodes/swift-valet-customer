import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    "sora": require("./assets/fonts/Sora-Regular.ttf"),
    "sora-medium": require("./assets/fonts/Sora-Medium.ttf"),
    "sora-semibold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "sora-bold": require("./assets/fonts/Sora-Bold.ttf"),
    "sora-light": require("./assets/fonts/Sora-Light.ttf"),
    "cabinet": require("./assets/fonts/CabinetGrotesk-Regular.otf"),
    "cabinet-bold": require("./assets/fonts/CabinetGrotesk-Bold.otf"),
    "cabinet-medium": require("./assets/fonts/CabinetGrotesk-Medium.otf"),
    "cabinet-light": require("./assets/fonts/CabinetGrotesk-Light.otf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View className={`flex-1 justify-center items-center`}>
      <Text className={`font-sora-medium`}>Open up App.tsx to start working on your app!</Text>
      <Text>
        Environment: {process.env.EXPO_PUBLIC_ENVIRONMENT}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
