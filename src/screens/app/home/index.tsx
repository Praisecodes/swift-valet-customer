import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Header from '../../../components/home/header';

const Home = () => {
  return (
    <View className={`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={{ minHeight: "100%", position: "relative", paddingHorizontal: 18, paddingVertical: 20 }}>
        <Header />
      </ScrollView>
    </View>
  )
}

export default Home;
