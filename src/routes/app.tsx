import React from 'react'
import { AppScreensTabs } from '.'
import Home from '../screens/app/home';
import Transactions from '../screens/app/transactions';
import Notifications from '../screens/app/notifications';
import Account from '../screens/app/account';

const AppScreens = () => {
  const { Navigator, Screen } = AppScreensTabs;
  
  return (
    <Navigator>
      <Screen name="home" component={Home} />
      <Screen name="transactions" component={Transactions} />
      <Screen name="notifications" component={Notifications} />
      <Screen name="account" component={Account} />
    </Navigator>
  )
}

export default AppScreens;
