import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MemoList = () => {
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <Text style={styles.memoTitle}>講座のアイテム</Text>
        <Text style={styles.memoDate}>2020/1/3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    width: '100%',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    marginBottom: 4,
    fontSize: 18,
  },
  memoDate: {
    color: '#a2a2a2',
    fontSize: 12,
  },
});



export default MemoList;