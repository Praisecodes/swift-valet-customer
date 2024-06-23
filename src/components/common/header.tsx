import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';

const Header = ({ title, onBackPressed }: { title: string; onBackPressed: () => any; }) => {
  return (
    <View className={`py-5 flex px-3 flex-row border-b border-b-[#F3F3F3] items-center`}>
      <TouchableWithoutFeedback onPress={onBackPressed}>
        <View className={`p-2`}>
          <ArrowLeft />
        </View>
      </TouchableWithoutFeedback>

      <Text className={`font-sora-medium text-xl ml-4`}>
        {title}
      </Text>
    </View>
  )
}

export default Header;
