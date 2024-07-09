import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import React, { useEffect } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreensStackParamList } from '../../../routes';
import { useIsFocused } from '@react-navigation/native';
import Warning from '../../../../assets/icons/warning.svg';

const Scan = ({ navigation }: { navigation: NativeStackNavigationProp<HomeScreensStackParamList, "scan"> }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status: existingStatus } = await Camera.getCameraPermissionsAsync();
      let finalStatus;
      if (existingStatus === "denied") {
        const status = await Camera.requestCameraPermissionsAsync();
        finalStatus = status;
        // console.log(finalStatus);
      }
    })()
  }, []);

  return (
    <View className={`flex-1 bg-[#171717]`}>
      <SafeAreaView className={`flex-1`}>
        <View className={`pt-10 flex-1 px-4`}>
          <StatusBar backgroundColor={"#171717"} barStyle={"light-content"} />
          <Text className={`text-white font-sora-bold text-xl my-5 mx-auto self-start`}>
            Scan QR Code
          </Text>

          <ImageBackground resizeMode="contain" source={require('../../../../assets/images/scan_bg.png')} className={`flex-1 p-3`}>
            <View className={`flex-1`}>
              <CameraView
                style={{ width: "90%", height: "60%", marginHorizontal: "auto", marginVertical: "auto" }}
                barcodeScannerSettings={{
                  barcodeTypes: ["qr"]
                }}
                onBarcodeScanned={(result) => {
                  console.log(result);
                }}
              />
            </View>
          </ImageBackground>

          <View className={`bg-[#1F2824] my-8 py-3.5 px-4 flex flex-row items-center rounded-lg`}>
            <Warning />
            <View className={`flex-1`}>
              <Text className={`font-sora text-white ml-3 text-sm`}>
                place the barcode inside the view finder to scan the valet QRcode
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Scan;
