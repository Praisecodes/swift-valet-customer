import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import Root from './src/routes/root';

const client = new QueryClient();

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
    <QueryClientProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Root />
            <StatusBar style="auto" translucent={false} backgroundColor='white' />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
