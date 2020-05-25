import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Item({ title }) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.icon}>
        <Ionicons name="ios-apps" size={35} color="black" />
      </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.deckSubtitle}>{title}</Text>
      </View>
    </View>
  );
}

const DeckList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.list}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 25,
  },
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

DeckList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DeckList;
