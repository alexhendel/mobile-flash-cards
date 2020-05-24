import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { Decks, AddDeck } from './components';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar } from 'react-native';

let TabNavigator;
switch (Platform.OS) {
  case 'ios':
    TabNavigator = createBottomTabNavigator(
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
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (routeName === 'Add Deck') {
              iconName = focused ? 'ios-add-circle' : 'ios-add';
            }
            return (
              <IconComponent name={iconName} size={25} color={tintColor} />
            );
          },
        }),
      }
    );
  default:
    TabNavigator = createMaterialTopTabNavigator({
      Decks: Decks,
      'Add Deck': AddDeck,
    });
}

const NavContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <NavContainer>
      <StatusBar backgroundColor="rgb(33, 150, 243)" barStyle="light-content" />
    </NavContainer>
  );
};

export default App;
