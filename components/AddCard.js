import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import Theme from '../utils/theme';
import { handleAddQuestion } from '../actions/decks';

class AddCard extends Component {
  state = {
    questionText: '',
    answerText: '',
  };
  handleQuestionTextChange = (value) => {
    this.setState(() => ({
      questionText: value,
    }));
  };
  handleAnswerTextChange = (value) => {
    this.setState(() => ({
      answerText: value,
    }));
  };
  handleAdd = () => {
    const { navigation, dispatch } = this.props;
    const id = navigation.getParam('id', '');

    const { questionText, answerText } = this.state;
    dispatch(handleAddQuestion(id, questionText, answerText)).then(() => {
      navigation.goBack();
    });
  };
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', '');
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new card</Text>
        <TextInput
          value={this.state.questionText}
          onChangeText={this.handleQuestionTextChange}
          placeholder="Question"
          style={styles.input}
        ></TextInput>
        <TextInput
          value={this.state.answerText}
          onChangeText={this.handleAnswerTextChange}
          placeholder="Answer"
          style={styles.input}
        ></TextInput>
        <Button
          title="Add"
          color={Theme.primary.color}
          onPress={this.handleAdd}
          disabled={
            this.state.questionText.length <= 0 ||
            this.state.questionText === null ||
            this.state.answerText.length <= 0 ||
            this.state.answerText === null
          }
        ></Button>
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
    width: '100%',
    borderRadius: 3,
    borderColor: 'grey',
    borderWidth: 2,
    marginBottom: 25,
    padding: 5,
  },
});

export default connect((state) => ({ decks: state.decks }))(AddCard);
