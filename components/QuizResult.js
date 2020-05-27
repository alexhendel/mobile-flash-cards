import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Theme from '../utils/theme';

const QuizResult = (props) => {
  const { result, navigation } = props;
  const id = navigation.getParam('id', '');
  const handleGoBack = () => {
    navigation.navigate('DeckDetails', { id });
  };
  const handleStartQuiz = () => {
    navigation.goBack();
    navigation.navigate('Quiz', { id });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>You finished the Quiz!</Text>
        <Text style={styles.subTitle}>
          {result.correct} out of {result.count} where answered correctly.
        </Text>
        <Text style={styles.subTitle}>
          You scored {((result.correct * 100) / result.count).toFixed(2)}%.
        </Text>
        <View style={styles.actionButton}>
          <Button
            color={Theme.primary.color}
            title="Back to Deck"
            onPress={handleGoBack}
          />
        </View>
        <View style={styles.actionButton}>
          <Button
            color={Theme.primary.color}
            title="Restart Quiz"
            onPress={handleStartQuiz}
          />
        </View>
      </View>
    </>
  );
};

QuizResult.propTypes = {
  result: PropTypes.object.isRequired,
};

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
    marginBottom: 60,
  },
  subTitle: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 25,
  },
  actionButton: {
    marginBottom: 25,
  },
});

export default withNavigation(QuizResult);
