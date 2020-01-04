import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const MemoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <View>
          <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
          <Text style={styles.memoHeaderDate}>2017/12/12</Text>
        </View>
      </View>

      <View style={styles.memoContent}>
        <Text>
          講座のアイデアです。
        </Text>
      </View>

      <CircleButton color="white" style={styles.editButton}>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    justifyContent: 'center',
    height: 100,
    padding: 10,
    backgroundColor: '#17313C',
  },
  memoHeaderTitle: {
    marginBottom: 5,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  memoContent: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  editButton: {
    position: 'absolute',
    top: 75,
  },
});

export default MemoDetailScreen;