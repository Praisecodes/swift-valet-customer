import { SafeAreaView, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsScreensStackParamList } from '../../../../routes';
import Header from '../../../../components/common/header';
import Upload from '../../../../../assets/icons/upload.svg';
import * as ImagePicker from 'expo-image-picker';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ImageIcon from '../../../../../assets/icons/image.svg';
import Check from '../../../../../assets/icons/check.svg'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Input from '../../../../components/common/input';

const validationSchema = object({
  name: string().required(),
  model: string().required(),
  plate_number: string().required(),
  color: string().required()
});

const AddCar = ({ navigation }: { navigation: NativeStackNavigationProp<SettingsScreensStackParamList, "add_car"> }) => {
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset>();
  const animatedWidth = useSharedValue(0);
  const [progress, setProgress] = useState<number>(0);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const widthStyle = useAnimatedStyle(() => ({
    width: `${animatedWidth.value}%`
  }));

  const formik = useFormik({
    initialValues: {
      name: "",
      model: "",
      plate_number: "",
      color: ""
    },
    onSubmit: async ({ name, model, plate_number, color }) => {
      if (image) {
        console.log(name, model, plate_number, color, image);
      }
    },
    validationSchema
  });

  const pickImage = async () => {
    animatedWidth.value = 0;
    if (ImagePicker.PermissionStatus.UNDETERMINED) {
      await requestPermission();
      if (!status?.granted) return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  }

  useEffect(() => {
    if (image) {
      setProgress(100);
      animatedWidth.value = withTiming(100, { duration: 200 });
    }
  }, [image]);

  return (
    <View className={`flex-1 bg-white`}>
      <SafeAreaView className={`flex-1`}>
        <Header title='Add car' onBackPressed={() => { navigation.goBack() }} />
        <View className={`flex-1`}>
          <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 20, paddingHorizontal: 16 }}>
            <View>
              <Text className={`font-sora-medium text-base`}>
                Input car details
              </Text>
              <Text className={`font-sora text-sm mt-1 text-[#A8A8A8]`}>
                Required to be able to setup your profile
              </Text>
            </View>

            <View className={`mt-9`}>
              <View>
                <Text className={`font-sora-medium`}>
                  Upload car image
                </Text>

                {!image && (
                  <TouchableWithoutFeedback onPress={pickImage}>
                    <View className={`rounded-lg border border-[#EAECF0] mt-2.5 py-4 px-5 bg-[#F9FAFB] flex items-center justify-center`}>
                      <Upload />

                      <Text className={`text-[#D0D5DD] font-sora-medium mt-1.5 leading-[24px]`}>
                        Click to upload
                      </Text>
                      <Text className={`text-grey-600 font-sora text-[15px] mt-1.5`}>
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}

                {image && (
                  <View className={`mt-2.5 border border-[#B4B7F0] py-4 px-5 rounded-lg flex flex-row justify-between items-start`}>
                    <View className={`flex-1 flex flex-row`}>
                      <ImageIcon width={40} height={40} />

                      <View className={`ml-2 flex-1`}>
                        <Text className={`font-sora text-base text-grey-800`}>
                          {image.fileName}
                        </Text>
                        <Text className={`font-sora text-[15px] mt-1 text-grey-600`}>
                          {Math.round(image.fileSize! / 1000)} KB
                        </Text>

                        <View className={`flex flex-row items-center mt-2`}>
                          <View className={`flex-1 bg-grey-200 h-[7px] rounded-full`}>
                            <Animated.View className={`bg-primary-900 h-full rounded-full`} style={widthStyle} />
                          </View>

                          <Text className={`text-grey-700 font-[15px] ml-2 font-sora`}>
                            {progress}%
                          </Text>
                        </View>
                      </View>
                    </View>

                    <Check />
                  </View>
                )}
              </View>

              <View className={`mt-8`}>
                <Input
                  placeholder='Car name'
                  value={formik.values.name}
                  onChangeText={formik.handleChange('name')}
                />
              </View>

              <View className={`mt-6`}>
                <Input
                  placeholder='Model of the car'
                  value={formik.values.model}
                  onChangeText={formik.handleChange('model')}
                />
              </View>

              <View className={`mt-6`}>
                <Input
                  placeholder='Car plate number'
                  value={formik.values.plate_number}
                  onChangeText={formik.handleChange('plate_number')}
                />
              </View>

              <View className={`mt-6`}>
                <Input
                  placeholder='Color of the car'
                  value={formik.values.color}
                  onChangeText={formik.handleChange('color')}
                />
              </View>

              <TouchableWithoutFeedback onPress={() => { formik.handleSubmit() }}>
                <Text className={`mt-14 mb-6 bg-primary-900 text-white font-sora-medium text-base py-4 rounded-lg text-center`}>
                  Save
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AddCar
