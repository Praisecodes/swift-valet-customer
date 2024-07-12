import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import User from '../../../assets/icons/scan/user.svg';

const ValetDetails = ({ closeModal }: { closeModal: () => any; }) => {
  return (
    <View className={``}>
      <User width={70} height={70} />
      <View className={`mt-3`}>
        <Text className={`font-sora-medium text-lg`}>
          Valet details
        </Text>
        <Text className={`font-sora text-[#667085] mt-1`}>
          This details provided to you is for security and safety purposes.
        </Text>
      </View>

      <View className={`mt-10`}>
        <View className={`mb-3`}>
          <Text className={`text-base font-sora-medium text-[#6A6A6A] mb-2`}>
            Valet Name
          </Text>
          <View className={`w-full rounded-lg py-3.5 px-4 bg-[#F9F9F9]`}>
            <Text className={`text-[#6A6A6A] font-sora text-base`}>
              Mr. Rashford Kim
            </Text>
          </View>
        </View>

        <View className={`mb-3`}>
          <Text className={`text-base font-sora-medium text-[#6A6A6A] mb-2`}>
            Valet ID Number
          </Text>
          <View className={`w-full rounded-lg py-3.5 px-4 bg-[#F9F9F9]`}>
            <Text className={`text-[#6A6A6A] font-sora text-base`}>
              #1234567890
            </Text>
          </View>
        </View>

        <View className={`mb-3`}>
          <Text className={`text-base font-sora-medium text-[#6A6A6A] mb-2`}>
            Location
          </Text>
          <View className={`w-full rounded-lg py-3.5 px-4 bg-[#F9F9F9]`}>
            <Text className={`text-[#6A6A6A] font-sora text-base`}>
              Enugu Shopping Plaza
            </Text>
          </View>
        </View>

        <View className={`mb-3`}>
          <Text className={`text-base font-sora-medium text-[#6A6A6A] mb-2`}>
            Amount
          </Text>
          <View className={`w-full rounded-lg py-3.5 px-4 bg-[#F9F9F9]`}>
            <Text className={`text-[#6A6A6A] font-sora text-base`}>
              $ 150.00
            </Text>
          </View>
        </View>
      </View>

      <View className={`mt-7`}>
        <TouchableWithoutFeedback>
          <View className={`rounded-lg overflow-hidden`}>
            <Text className={`bg-primary-900 text-white rounded-lg w-full text-base font-sora-medium py-4 text-center`}>
              Pay
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={closeModal}>
          <View className={`rounded-lg overflow-hidden mt-3 border border-[#D0D5DD] py-4 w-full`}>
            <Text className={`text-[#6A6A6A] text-base font-sora-medium text-center`}>
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default ValetDetails;
