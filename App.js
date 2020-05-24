import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Decks, AddDeck } from './components';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator(
  {
    Decks: Decks,
    'Add Deck': AddDeck,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Decks') {
          iconName = focused ? 'md-list-box' : 'md-list';
        } else if (routeName === 'Add Deck') {
          iconName = focused ? 'md-add-circle' : 'md-add';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

export default createAppContainer(TabNavigator);
