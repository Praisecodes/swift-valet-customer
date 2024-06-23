import React from 'react'
import { AppScreensTabs } from '.'
import Transactions from '../screens/app/transactions';
import Notifications from '../screens/app/notifications';
import Account from '../screens/app/account';
import HomeIcon from '../../assets/icons/tabs/home.svg';
import HomeIconActive from '../../assets/icons/tabs/home-active.svg';
import TransactionsIcon from '../../assets/icons/tabs/transactions.svg';
import TransactionsIconActive from '../../assets/icons/tabs/transactions-active.svg';
import NotificationsIcon from '../../assets/icons/tabs/notifications.svg';
import NotificationsIconActive from '../../assets/icons/tabs/notifications-active.svg';
import AccountIcon from '../../assets/icons/tabs/account.svg';
import AccountIconActive from '../../assets/icons/tabs/account-active.svg';
import HomeScreens from './home';

const AppScreens = () => {
  const { Navigator, Screen } = AppScreensTabs;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "sora-medium",
          textTransform: "capitalize",
          fontSize: 12,
          lineHeight: 18,
          marginTop: 0,
        },
        tabBarActiveTintColor: "#00BE5D",
        tabBarInactiveTintColor: "#A8A8A8",
        tabBarIconStyle: {
          marginBottom: 15
        },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          elevation: 0,
          borderWidth: 0,
          borderColor: "#FFFFFF",
          height: 69,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: 0,
          paddingTop: 10,
          marginBottom: 0,
        }
      }}
    >
      <Screen
        name="home"
        component={HomeScreens}
        options={{
          tabBarIcon: (({ focused }) => (focused ? <HomeIconActive /> : <HomeIcon />))
        }}
      />

      <Screen
        name="transactions"
        component={Transactions}
        options={{
          tabBarIcon: (({ focused }) => (focused ? <TransactionsIconActive /> : <TransactionsIcon />))
        }}
      />

      <Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: (({ focused }) => (focused ? <NotificationsIconActive /> : <NotificationsIcon />))
        }}
      />

      <Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: (({ focused }) => (focused ? <AccountIconActive /> : <AccountIcon />))
        }}
      />
    </Navigator>
  )
}

export default AppScreens;
