import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DeckListItem = ({ title, questions }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.icon}>
        <Ionicons name="ios-apps" size={35} color="black" />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.deckSubtitle}>{`${questions} card(s)`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 25,
    paddingBottom: 2,
  },
  deckSubtitle: {
    fontSize: 15,
    paddingBottom: 10,
    color: 'grey',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    paddingRight: 10,
  },
});

DeckListItem.propTypes = {
  title: PropTypes.string.isRequired,
  questions: PropTypes.number.isRequired,
};

export default DeckListItem;
