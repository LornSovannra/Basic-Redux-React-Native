import React from 'react'
import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const {width} = Dimensions.get('window');

export default function PrimaryButon({ title, bgColor, onAction }) {
  return (
    <TouchableOpacity style={[styles.btnLoginWrapper, {backgroundColor: bgColor}]} onPress={onAction}>
      <Text style={styles.btnLoginTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLoginWrapper: {
    width: width - 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});