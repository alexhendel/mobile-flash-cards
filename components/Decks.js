import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DeckList from './DeckList';
import { connect } from 'react-redux';
import { handleGetDecks } from '../actions/decks';
import { toArray } from '../utils';

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetDecks());
  }
  render() {
    return (
      <View style={styles.container}>
        <DeckList list={toArray(this.props.decks)} />
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

export default connect((state) => ({
  decks: state.decks,
}))(Decks);
