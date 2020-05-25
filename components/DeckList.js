import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const Item = ({ title, questions }) => {
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

const DeckList = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={props.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Deck Details', { id: item.id })}
          >
            <Item
              title={item.title}
              questions={item.questions.length}
              id={item.id}
            />
          </TouchableOpacity>
        )}
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

export default withNavigation(DeckList);
