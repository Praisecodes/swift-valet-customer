import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import Avatar from '../../../assets/images/Avatar.png';
import Hamburger from '../../../assets/icons/hamburger.svg';

const Header = () => {
  return (
    <View className={`flex flex-row items-center justify-between`}>
      <View className={`flex flex-1 flex-row gap-x-3 items-center mr-4`}>
        <Image
          source={Avatar}
        />

        <Text className={`font-sora text-base`}>
          Hello Okeypraise!!
        </Text>
      </View>

      <View>
        <TouchableWithoutFeedback>
          <Hamburger />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default Header;
