import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { StackActions } from 'react-navigation';
import Theme from '../utils/theme';
import { handleAddDeck } from '../actions/decks';
import { connect } from 'react-redux';

class AddDeck extends Component {
  state = {
    deckName: '',
  };
  handleAdd = () => {
    const { dispatch } = this.props;
    dispatch(handleAddDeck(this.state.deckName)).then(() => {
      this.setState(() => ({ deckName: '' }));
      this.props.navigation.navigate('Decks');
      this.props.navigation.dispatch(StackActions.popToTop());
    });
  };
  handleDeckNameChange = (value) => {
    this.setState(() => ({ deckName: value }));
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new flash card deck:</Text>
        <TextInput
          value={this.state.deckName}
          onChangeText={this.handleDeckNameChange}
          placeholder="Deck Name"
          style={styles.input}
        ></TextInput>
        <Button
          title="Add"
          color={Theme.primary.color}
          disabled={
            this.state.deckName.length <= 0 || this.state.deckName === null
          }
          onPress={this.handleAdd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header: {
    marginBottom: 25,
    fontSize: 25,
  },
  input: {
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 25,
    padding: 5,
  },
});

export default connect((state) => ({
  decks: state.decks,
}))(AddDeck);
