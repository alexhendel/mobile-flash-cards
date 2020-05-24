import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Text } from 'react-native';

function Item({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const DeckList = (props) => {
  return (
    <View>
      <FlatList
        data={props.list}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

DeckList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default DeckList;
