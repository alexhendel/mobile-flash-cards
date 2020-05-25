import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Theme from '../theme';
import { connect } from 'react-redux';
import { handleDeleteDeck } from '../actions/decks';

class DeckDetails extends Component {
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(handleDeleteDeck(id)).then(() =>
      this.props.navigation.navigate('Decks')
    );
  };
  render() {
    const { navigation } = this.props;
    const { decks } = this.props;
    const id = navigation.getParam('id', '');
    return (
      <>
        {decks[id] ? (
          <View style={styles.container}>
            <Text style={styles.title}>{decks[id].title}</Text>
            <Text style={styles.subTitle}>
              {`${decks[id].questions.length} card(s) in this deck.`}
            </Text>
            <Button
              color={Theme.warn.color}
              title="Delete"
              onPress={() => this.handleDelete(id)}
            />
          </View>
        ) : (
          <Text style={styles.title}>Sorry, the deck was not found.</Text>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 100,
    flexDirection: 'column',
  },
  title: {
    fontSize: 25,
    paddingBottom: 2,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    paddingBottom: 250,
    color: 'grey',
    textAlign: 'center',
  },
});

export default connect((state) => ({
  decks: state.decks,
}))(DeckDetails);
