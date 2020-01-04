import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CircleButton = (props) => {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonTitle}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 32,
    bottom: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonTitle: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
