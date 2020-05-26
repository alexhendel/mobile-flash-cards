import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const QuizResult = (props) => {
  const { result } = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>You finished the Quiz!</Text>
        <Text style={styles.subTitle}>
          {result.correct} out of {result.count} where answered correctly.
        </Text>
        <Text style={styles.subTitle}>
          You scored {(result.correct * 100) / result.count}%.
        </Text>
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
  },
});

export default QuizResult;
