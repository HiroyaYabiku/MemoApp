import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <View>
        <Text style={styles.appbarTitle}>MEMO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    width: '100%',
    height: 78,
    paddingTop: 30,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .5,
    shadowRadius: 3,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Appbar;
