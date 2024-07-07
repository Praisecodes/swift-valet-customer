import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Header from '../../../../../components/common/header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SupportScreensStackParamList } from '../../../../../routes';
import Faq from '../../../../../../assets/icons/settings/support/faq.svg';
import Chatbot from '../../../../../../assets/icons/settings/support/chatbot.svg';
import Contact from '../../../../../../assets/icons/settings/support/contact.svg';

const Support = ({ navigation }: { navigation: NativeStackNavigationProp<SupportScreensStackParamList, "index"> }) => {
  const options = [
    {
      title: "FAQs",
      icon: <Faq />,
      text: "Get support by getting answers to your curiosity",
      onPress: () => { navigation.navigate("faqs") }
    },
    {
      title: "Chatbots/personnel",
      icon: <Chatbot />,
      text: "Connect to our live chat to get support from us",
      onPress: () => { navigation.navigate("chatbot") }
    },
    {
      title: "Contact us",
      icon: <Contact />,
      text: "Contact us or send us a mail",
      onPress: () => { navigation.navigate("contact") }
    },
  ];

  return (
    <View className={`flex-1 bg-white`}>
      <Header title='Support' onBackPressed={() => { navigation.goBack(); }} />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
          <Text className={`font-sora text-base text-[#6E6E6E]`}>
            Choose the best option for you to get support from us
          </Text>

          <View>
            {options.map((option, index) => (
              <TouchableWithoutFeedback key={index} onPress={option.onPress}>
                <View className={`border-b border-b-[#F3F1F1] ${(index === (options.length - 1)) ? "py-4" : "py-3"} mt-4 flex flex-row px-3 items-center`}>
                  {option.icon}

                  <View className={`ml-5 flex-1`}>
                    <Text className={`font-sora-medium text-base`}>
                      {option.title}
                    </Text>
                    <Text className={`font-sora text-[#A8A8A8] text-sm leading-none mt-1`}>
                      {option.text}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Support;
