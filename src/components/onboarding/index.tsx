import { Image, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardingComponent = ({ data }: { data: IOnbaordingData }) => {
  const { width } = useWindowDimensions();

  return (
    <View className={`flex-1 items-center justify-center relative`} style={{ width }}>
      <Image
        source={data.image}
        resizeMode="contain"
      />

      <View className={`absolute px-6 py-5 bg-white bottom-0 w-full`}>
        {data.icon}

        <Text className={`text-[26px] font-cabinet-bold mt-5`}>
          {data.title}
        </Text>

        <Text className={`text-base font-sora mt-2 leading-[30px]`}>
          {data.text}
        </Text>
      </View>
    </View>
  )
}

export default OnboardingComponent;
