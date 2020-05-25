import React from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

const DeckDetails = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>
        Deck Details for {JSON.stringify(navigation.getParam('id', ''))}
      </Text>
    </View>
  );
};

export default withNavigation(DeckDetails);
