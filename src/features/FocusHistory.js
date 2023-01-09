import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes'

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title2}>We haven't focused on anything yet</Text>
  const renderItem= ({item}) => <Text style={styles.item}>- {item}</Text>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on :</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  paddingLeft: spacing.md,
  flex:1,
  },
  title:{
    color:colors.white,
    fontSize:'bold',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingTop: spacing.sm
  },
  title2:{
    color:colors.white,
    fontSize:'bold',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    paddingTop: spacing.sm,
    paddingLeft: spacing.md,
  },
  item : {
    fontSize: fontSizes.md,
    color: colors.white
  }
})
