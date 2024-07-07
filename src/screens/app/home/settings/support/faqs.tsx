import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../../../components/common/header';
import { SupportScreensStackParamList } from '../../../../../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Open from '../../../../../../assets/icons/settings/support/faq/open.svg';
import Close from '../../../../../../assets/icons/settings/support/faq/close.svg';

const Faqs = ({ navigation }: { navigation: NativeStackNavigationProp<SupportScreensStackParamList, "faqs"> }) => {
  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "How do i get premium features?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "What is our policy?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "How do I get premium features?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "How do I change my email address?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
  ];
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  return (
    <View className={`flex-1 bg-white`}>
      <Header title="FAQ'S" onBackPressed={() => { navigation.goBack(); }} />
      <View className={`flex-1`}>
        <ScrollView contentContainerStyle={{ minHeight: "100%", paddingTop: 14, paddingHorizontal: 16 }}>
          <Text className={`font-sora-bold text-lg`}>
            Frequently asked questions
          </Text>
          <Text className={`font-sora-light text-sm text-[#667085] mt-1`}>
            Everything you need to know about the Swiftvalet
          </Text>

          <View className={`mt-3`}>
            {faqs.map((faq, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  if (openQuestions.includes(index)) {
                    let vals = [...openQuestions];
                    const i = vals.findIndex((value) => (value === index));
                    vals.splice(i, 1);
                    setOpenQuestions(vals);
                  } else {
                    setOpenQuestions((values) => ([...values, index]));
                  }
                }}
              >
                <View className={`border-b border-b-[#EAECF0] py-5 mt-2 px-3 flex flex-row`}>
                  <View className={`flex-1 ${!openQuestions.includes(index) && "h-6"} overflow-hidden mr-3`}>
                    <Text className={`font-sora-medium text-base`}>
                      {faq.question}
                    </Text>
                    <Text className={`font-sora mt-3.5 text-sm text-[#515151]`}>
                      {faq.answer}
                    </Text>
                  </View>

                  {openQuestions.includes(index) ? (<Close width={21} />) : (<Open />)}
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Faqs;
