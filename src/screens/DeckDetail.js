import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function DeckDetail(props) {
  return (
    <View style={styles.container}>
      <Text>Deck Details </Text>
      <Button title="Start quiz" onPress={() => props.navigation.navigate('Quiz')}>
        Start quiz
      </Button>
      <Button title="Create card" onPress={() => props.navigation.navigate('CreateCard')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
