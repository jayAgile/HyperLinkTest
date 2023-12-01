import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const linkify = require('linkify-it')();

const App = () => {
  const textComp = 'Hello world https://www.google.com/';
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(linkify.match(textComp))}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
