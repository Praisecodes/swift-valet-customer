import { Text, View } from 'react-native';
import React from 'react';
import Layout from './layout';

const CarDetails = () => {
  return (
    <Layout>
      <Text className={`font-cabinet-bold text-[28px] mt-4`}>
        Car Details
      </Text>
      <Text className={`text-grey-400 font-sora mt-1.5 text-[15px]`}>
        Required to be able to setup your profile
      </Text>
    </Layout>
  )
}

export default CarDetails;
