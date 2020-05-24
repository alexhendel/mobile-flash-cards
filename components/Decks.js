import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DeckList from './DeckList';

class Decks extends Component {
  state = {
    data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Decks Page</Text>
        <DeckList list={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Decks;
