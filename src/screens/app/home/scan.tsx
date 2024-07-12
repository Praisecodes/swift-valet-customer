import { ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { CameraView, Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreensStackParamList } from '../../../routes';
import { useIsFocused } from '@react-navigation/native';
import Warning from '../../../../assets/icons/warning.svg';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import ValetDetails from '../../../components/scan/valet_details';
import PaymentMethod from '../../../components/scan/payment_method';
import CardDetails from '../../../components/scan/card_details';

const Scan = ({ navigation }: { navigation: NativeStackNavigationProp<HomeScreensStackParamList, "scan"> }) => {
  const isFocused = useIsFocused();
  const ref = useRef<BottomSheetModal>(null);
  const [section, setSection] = useState<"details" | "payment" | "card">("details");

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
                  setSection("details");
                  ref.current?.present();
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

        <BottomSheetModal
          ref={ref}
          handleComponent={null}
          enableDynamicSizing
          backdropComponent={(props) => (
            <BottomSheetBackdrop
              {...props}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
            />
          )}
        >
          <BottomSheetScrollView>
            <View className={`pt-5 android:pb-5 ios:pb-8 px-4`}>
              {section === "details" && <ValetDetails closeModal={() => { ref.current?.dismiss(); }} />}
              {section === "payment" && <PaymentMethod />}
              {section === "card" && <CardDetails />}
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
      </SafeAreaView>
    </View>
  )
}

export default Scan;
