import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import Avatar from '../../../assets/images/Avatar.png';
import Hamburger from '../../../assets/icons/hamburger.svg';
import Close from '../../../assets/icons/close.svg';
import Settings from '../../../assets/icons/settings.svg';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Header = () => {
  const animatedHeight = useSharedValue<any>(0);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const animatedHeightStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value
  }));

  useEffect(() => {
    if (navOpen) {
      animatedHeight.value = withTiming(123, { duration: 90 });
    } else {
      animatedHeight.value = withTiming(0, { duration: 90 });
    }
  }, [navOpen]);

  return (
    <View className={`flex flex-row items-center justify-between`}>
      <View className={`flex flex-1 flex-row gap-x-3 items-center mr-4`}>
        <Image
          source={Avatar}
        />

        <Text className={`font-sora text-[17px]`} numberOfLines={1}>
          Hello, Okeypraise!!
        </Text>
      </View>

      <View className={`relative`}>
        <TouchableWithoutFeedback onPress={() => { setNavOpen(true) }}>
          <Hamburger width={40} height={40} />
        </TouchableWithoutFeedback>

        <Animated.View
          className={`absolute overflow-hidden z-30 bg-white w-[270px] top-0 right-0 rounded-md`}
          style={[{ elevation: 0.5 }, animatedHeightStyle]}
        >
          <View className={`px-4 border-b border-b-[#E4E4E443] py-3 flex flex-row items-center justify-end`}>
            <TouchableWithoutFeedback onPress={() => { setNavOpen(false) }}>
              <View className={`p-1.5`}>
                <Close />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback>
            <View className={`px-4 py-3 flex flex-row gap-x-3 items-center`}>
              <Settings width={45} height={45} />

              <Text className={`font-sora-medium text-lg`}>
                Settings
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </View>
  )
}

export default Header;
