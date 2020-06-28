import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default function DeckDetail(props) {
  const { state } = props.route.params
  console.log('props in details :>> ', props)
  return (
    <View style={styles.container}>
      <Text style={styles.deckname}>Current Deck: {state.title} </Text>
      <Text style={styles.deckdetails}>Cards Available: {state.questions.length} </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Quiz')}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CreateCard')}>
          <Text style={styles.buttonText}>Create card</Text>
        </TouchableOpacity>
      </View>
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

  deckname: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  deckdetails: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttons: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  button: {
    flex: 1,
    width: 400,
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})
