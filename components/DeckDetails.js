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
  handleAdd = (id) => {
    const { navigation } = this.props;
    navigation.navigate('AddCard', { id });
  };
  handleStartQuiz = (id) => {
    const { navigation, decks } = this.props;

    if (decks[id].questions.length === 0 || !decks[id].questions) {
      navigation.navigate('NoCards');
    } else {
      navigation.navigate('Quiz');
    }
  };
  render() {
    const { navigation } = this.props;
    const { decks } = this.props;
    const id = navigation.getParam('id', '');
    return (
      <>
        {decks[id] ? (
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{decks[id].title}</Text>
              <Text style={styles.subTitle}>
                {`${decks[id].questions.length} card(s) in this deck.`}
              </Text>
              <View style={styles.actionButton}>
                <Button
                  color={Theme.primary.color}
                  title="Add Card"
                  onPress={() => this.handleAdd(id)}
                />
              </View>
              <View style={styles.actionButton}>
                <Button
                  color={Theme.primary.color}
                  title="Start Quiz"
                  onPress={() => this.handleStartQuiz(id)}
                />
              </View>
            </View>
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
  infoContainer: {
    marginBottom: 150,
  },
  title: {
    fontSize: 25,
    paddingBottom: 2,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    color: 'grey',
    marginBottom: 60,
    textAlign: 'center',
  },
  actionButton: {
    marginBottom: 25,
  },
});

export default connect((state) => ({
  decks: state.decks,
}))(DeckDetails);
