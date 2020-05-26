import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Decks, AddDeck } from './components';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StatusBar, SafeAreaView } from 'react-native';
import Theme from './theme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { NoCards, DeckDetails, AddCard, Quiz, QuizResult } from './components';

const store = createStore(reducer, middleware);

const DeckStackNavigator = createStackNavigator({
  Decks: Decks,
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: () => ({
      title: 'Deck Details',
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: 'Add Card',
    }),
  },
  NoCards: {
    screen: NoCards,
    navigationOptions: () => ({
      title: 'No Cards',
    }),
  },
  Quiz: Quiz,
  QuizResult: {
    screen: QuizResult,
    navigationOptions: () => ({
      title: 'Quiz Result',
    }),
  },
});

let TabNavigator;
switch (Platform.OS) {
  case 'ios':
    TabNavigator = createBottomTabNavigator(
      {
        Decks: DeckStackNavigator,
        AddDeck: AddDeck,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Decks') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (routeName === 'AddDeck') {
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
        AddDeck: AddDeck,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Decks') {
              iconName = focused ? 'md-list-box' : 'md-list';
            } else if (routeName === 'AddDeck') {
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
