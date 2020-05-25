import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoCards = () => {
  return (
    <View style={styles.root}>
      <Text>
        This deck has no cards. Please add some cards to start a Quiz.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NoCards;
