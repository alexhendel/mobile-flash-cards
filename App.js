import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Decks, AddDeck } from './components';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import DeckDetails from './components/DeckDetails';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import Theme from './theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

const DeckStackNavigator = createStackNavigator({
  Decks: Decks,
  'Deck Details': DeckDetails,
  'Add Card': AddCard,
  Quiz: Quiz,
});

let TabNavigator;
switch (Platform.OS) {
  case 'ios':
    TabNavigator = createBottomTabNavigator(
      {
        Decks: DeckStackNavigator,
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
    TabNavigator = createMaterialBottomTabNavigator(
      {
        Decks: DeckStackNavigator,
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
            return (
              <IconComponent name={iconName} size={25} color={tintColor} />
            );
          },
          barStyle: {
            backgroundColor: Theme.primary.color,
            paddingBottom: 5,
            paddingTop: 5,
          },
        }),
      }
    );
}

const NavContainer = createAppContainer(TabNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavContainer>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              backgroundColor={Theme.primary.color}
              barStyle="light-content"
            />
          </SafeAreaView>
        </NavContainer>
      </Provider>
    );
  }
}

export default App;
