import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import DeckListItem from './DeckListItem';

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
            <DeckListItem
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
});

DeckList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default withNavigation(DeckList);
