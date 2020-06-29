import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

function DeckDetail(props) {
  const { currentDeck } = props
  let disabled
  if (currentDeck.questions.length === 0) {
    disabled = true
  } else {
    disabled = false
  }
  return (
    <View style={styles.container}>
      <Text style={styles.deckname}>Current Deck: {currentDeck.title} </Text>
      <Text style={styles.deckdetails}>Cards Available: {currentDeck.questions.length} </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          disabled={disabled}
          style={disabled ? styles.disabled : styles.button}
          onPress={() => props.navigation.navigate('Quiz', { state: currentDeck.title })}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('CreateCard', { title: currentDeck.title })}
        >
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
  disabled: {
    flex: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
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

function mapStateToProps(decks, props) {
  const { state } = props.route.params
  let deck = state.trim()
  let currentDeck = decks[deck]

  return {
    currentDeck,
  }
}

export default connect(mapStateToProps)(DeckDetail)
