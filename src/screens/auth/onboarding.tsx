import { FlatList, Text, TouchableWithoutFeedback, View, useWindowDimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import Create from '../../../assets/icons/onboarding/create-account.svg';
import Secure from '../../../assets/icons/onboarding/secure.svg';
import Seamless from '../../../assets/icons/onboarding/seamless.svg';
import Profile from '../../../assets/icons/onboarding/profile.svg';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../routes';
import AngleRight from '../../../assets/icons/angle-right.svg';
import OnboardingComponent from '../../components/onboarding';

const Onboarding = ({ navigation }: { navigation: NativeStackNavigationProp<AuthStackParamList, "onboarding"> }) => {
  const [index, setIndex] = useState<number>(0);
  const { width } = useWindowDimensions();
  const ref = useRef<FlatList>(null);

  const data = [
    {
      title: "Create account with us",
      text: "Creating account with us gives you the privilege to have personal connection with our valet and enjoy free trial.",
      icon: <Create />,
      image: require('../../../assets/images/onboarding/create.png')
    },
    {
      title: "Secure your vehicle",
      text: "Scan our quick response code, for valet details and amazing payment method, to ensure better and seamless transaction.",
      icon: <Secure />,
      image: require('../../../assets/images/onboarding/secure.png')
    },
    {
      title: "Seamless transactions",
      text: "we have the easiest method for payment with the use of any choose of yours, we automatically makes you feel comfortable during payment.",
      icon: <Seamless />,
      image: require('../../../assets/images/onboarding/seamless.png')
    },
    {
      title: "Profile setup",
      text: "we will allow you set up your profile and give you an opportunity to add all the amazing cars in your possession.",
      icon: <Profile />,
      image: require('../../../assets/images/onboarding/profile.png')
    },
  ];

  return (
    <View className={`flex-1 bg-white`}>
      <View className={`flex-1`}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          renderItem={({ item }) => (<OnboardingComponent data={item} />)}
          ref={ref}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={(e) => {
            setIndex(Math.round(e.nativeEvent.contentOffset.x / width));
          }}
        />
      </View>

      <View className={`py-8 px-6`}>
        <View className={`flex flex-row items-center mx-auto self-start`}>
          {Array.from({ length: data.length }).map((_, i) => (
            <View
              key={i}
              className={`w-[22px] mx-0.5 h-[2.39px] ${i === index ? "bg-primary-800" : "bg-grey-400"} rounded-full`}
            />
          ))}
        </View>

        <View className={`flex flex-row justify-between items-center mt-14`}>
          {(index !== data.length - 1) && (
            <TouchableWithoutFeedback onPress={() => { navigation.navigate("signup", { screen: "index" }) }}>
              <Text className={`font-sora-medium py-2 text-base text-black`}>
                Skip
              </Text>
            </TouchableWithoutFeedback>
          )}
          <View />

          <TouchableWithoutFeedback onPress={() => {
            if (index === data.length - 1) {
              navigation.navigate("signup", { screen: "index" });
            } else {
              ref.current?.scrollToIndex({ index: index + 1 });
            }
          }}>
            <View className={`w-14 h-14 bg-black rounded-full flex items-center justify-center`}>
              <AngleRight />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default Onboarding;
