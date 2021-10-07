import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * @author
 * @function ComponentOne
 **/
const ComponentOne = props => {
  const {container} = styles;
  return (
    <View style={container}>
      <Text>ComponentOne</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ComponentOne;
