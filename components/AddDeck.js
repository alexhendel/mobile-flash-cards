import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

class AddDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new flash card deck:</Text>
        <TextInput placeholder="Deck Name" style={styles.input}></TextInput>
        <Button title="Add" />
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
  },
  input: {
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 25,
    padding: 5,
  },
});

export default AddDeck;
