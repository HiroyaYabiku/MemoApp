import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BodyText = (props) => {
  return (
    <View>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    backgroundColor: "yellow",
  },
});

export default BodyText;