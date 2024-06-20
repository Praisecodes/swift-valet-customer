import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Layout from './layout';
import Upload from '../../../../assets/icons/upload.svg';
import Input from '../../../components/common/input';

const CarDetails = () => {
  return (
    <Layout>
      <Text className={`font-cabinet-bold text-[28px] mt-4`}>
        Car Details
      </Text>
      <Text className={`text-grey-400 font-sora mt-1.5 text-[15px]`}>
        Required to be able to setup your profile
      </Text>

      <View className={`mt-9`}>
        <TouchableWithoutFeedback>
          <View>
            <Text className={`font-sora-medium`}>
              Upload car image
            </Text>

            <View className={`rounded-lg border border-[#EAECF0] mt-2.5 py-4 px-5 bg-[#F9FAFB] flex items-center justify-center`}>
              <Upload />

              <Text className={`text-[#D0D5DD] font-sora-medium mt-1.5`}>
                Click to upload
              </Text>
              <Text className={`text-grey-600 font-sora text-[15px] mt-1.5`}>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View className={`mt-8`}>
          <Input
            keyboardType="phone-pad"
            placeholder='Car name'
          />
        </View>

        <View className={`mt-6`}>
          <Input
            keyboardType="phone-pad"
            placeholder='Model of car'
          />
        </View>

        <View className={`mt-6`}>
          <Input
            keyboardType="phone-pad"
            placeholder='Car plate number'
          />
        </View>

        <View className={`mt-6`}>
          <Input
            keyboardType="phone-pad"
            placeholder='Color of car'
          />
        </View>

        <TouchableWithoutFeedback onPress={() => { }}>
          <Text className={`mt-14 mb-6 bg-primary-900 text-white font-sora-medium text-base py-4 rounded-lg text-center`}>
            Next
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Layout>
  )
}

export default CarDetails;
