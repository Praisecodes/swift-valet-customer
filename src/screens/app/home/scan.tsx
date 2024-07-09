import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import React from 'react';

const Scan = () => {
  return (
    <View className={`flex-1 bg-[#171717]`}>
      <SafeAreaView className={`flex-1`}>
        <StatusBar backgroundColor={"#171717"} barStyle={"light-content"} />
      </SafeAreaView>
    </View>
  )
}

export default Scan;
