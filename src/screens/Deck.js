import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Decks() {
  return (
    <View style={styles.container}>
      <Text>All Decks </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
