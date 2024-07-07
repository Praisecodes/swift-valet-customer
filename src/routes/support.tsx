import React from 'react';
import { SupportScreensStack } from '.';
import Faqs from '../screens/app/home/settings/support/faqs';
import Chatbot from '../screens/app/home/settings/support/chatbot';
import Contact from '../screens/app/home/settings/support/contact';
import Support from '../screens/app/home/settings/support';

const SupportScreens = () => {
  const { Navigator, Screen } = SupportScreensStack;
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="index" component={Support} />
      <Screen name="faqs" component={Faqs} />
      <Screen name="chatbot" component={Chatbot} />
      <Screen name="contact" component={Contact} />
    </Navigator>
  )
}

export default SupportScreens;
