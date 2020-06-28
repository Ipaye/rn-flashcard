import React from 'react'
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import { createDeck } from '../actions'
import { connect } from 'react-redux'
import { saveDeckTitle, getDecks } from '../utils/api'

class CreateDecks extends React.Component {
  state = {
    deck: '',
  }

  handleChange = (newValue) => {
    this.setState({ deck: newValue })
  }

  handleSubmit = async () => {
    const { dispatch } = this.props
    const { deck } = this.state
    let newDeck = {
      [deck]: {
        title: deck,
        questions: [],
      },
    }
    try {
      await saveDeckTitle(newDeck)
      let newResult = await getDecks()
      dispatch(createDeck(newDeck))
      this.setState({ deck: '' })
      if (newResult) {
        this.props.navigation.navigate('Detail', { state: deck })
      }
    } catch (error) {
      console.log('error :>> ', error)
    }
  }

  render() {
    const { deck } = this.state
    let disabled
    if (!deck) {
      disabled = true
    } else {
      disabled = false
    }

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.PageHeading}>Creat a Decks </Text>
        </View>

        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View>
                <Text style={styles.header}>Deck Name</Text>
                <TextInput
                  onChangeText={this.handleChange}
                  value={this.state.deck}
                  placeholder="Enter the name of the deck"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  disabled={disabled}
                  style={[disabled ? styles.disabled : styles.button]}
                  onPress={this.handleSubmit}
                >
                  <Text style={styles.buttonText}> Create Deck</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

        {/* End of scroll view */}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  PageHeading: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20,
  },
  inner: {
    justifyContent: 'center',
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    flex: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default connect()(CreateDecks)
