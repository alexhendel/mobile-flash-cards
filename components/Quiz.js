import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Theme from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import QuizResult from './QuizResult';

class Quiz extends Component {
  state = {
    count: 0,
    current: 0,
    correct: 0,
    toggleAnswer: false,
    toggleResult: false,
  };
  componentDidMount() {
    const { decks, navigation } = this.props;
    const id = navigation.getParam('id', '');

    if (decks[id]) {
      this.setState(() => ({ count: decks[id].questions.length }));
    }
  }
  handleToggleAnswer = () => {
    this.setState(() => ({
      toggleAnswer: !this.state.toggleAnswer,
    }));
  };
  handleCorrect = () => {
    this.setState(() => ({ correct: this.state.correct + 1 }));
    this.handleNextQuestion();
  };
  handleNotCorrect = () => {
    this.handleNextQuestion();
  };
  handleNextQuestion = () => {
    const { current } = this.state;
    const { decks, navigation } = this.props;
    const id = navigation.getParam('id', '');

    if (current < decks[id].questions.length - 1) {
      this.setState(() => ({ current: current + 1 }));
    } else {
      this.setState(() => ({
        current: 0,
        toggleAnswer: false,
        toggleResult: true,
      }));
    }
  };
  render() {
    const { decks, navigation } = this.props;
    const id = navigation.getParam('id', '');
    return (
      <>
        {this.state.toggleResult ? (
          <QuizResult
            result={{ correct: this.state.correct, count: this.state.count }}
          />
        ) : (
          <>
            {decks[id] ? (
              <View style={styles.container}>
                <Text style={styles.title}>
                  {decks[id].questions[this.state.current].question}
                </Text>
                <Text style={styles.subTitle}>{`${this.state.current + 1} of ${
                  this.state.count
                }`}</Text>
                <View style={styles.answerContainer}>
                  <TouchableOpacity onPress={this.handleToggleAnswer}>
                    <Text style={styles.answer}>Show Answer</Text>
                  </TouchableOpacity>
                  {this.state.toggleAnswer && (
                    <Text>
                      {decks[id].questions[this.state.current].answer}
                    </Text>
                  )}
                </View>
                <View style={styles.actionButton}>
                  <Button
                    title="Correct"
                    color={Theme.primary.color}
                    onPress={this.handleCorrect}
                  />
                </View>
                <View style={styles.actionButton}>
                  <Button
                    title="Not Correct"
                    color={Theme.warn.color}
                    onPress={this.handleNotCorrect}
                  />
                </View>
              </View>
            ) : (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  An error occured. This Quiz can't be started.
                </Text>
                <Button
                  title="Go Back"
                  color={Theme.primary.color}
                  onPress={() => navigation.goBack()}
                ></Button>
              </View>
            )}
          </>
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
  actionButton: {
    marginBottom: 25,
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
  answerContainer: {
    marginBottom: 60,
    marginTop: 5,
  },
  answer: {
    textAlign: 'center',
    color: Theme.warn.color,
    paddingBottom: 20,
  },
  errorContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  errorText: {
    color: Theme.warn.color,
    marginBottom: 20,
  },
});

export default connect((state) => ({ decks: state.decks }))(Quiz);
