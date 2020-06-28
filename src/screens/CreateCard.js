import React from 'react'
import {
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
import { connect } from 'react-redux'

import { addCardToDeck as updateCard } from '../actions'
import { addCardToDeck, getDecks } from '../utils/api'

class CreateCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  handleQuestionChange = (newValue) => {
    this.setState({ question: newValue })
  }

  handleaAnswerChange = (newValue) => {
    this.setState({ answer: newValue })
  }

  handleSubmit = async () => {
    const { dispatch } = this.props
    const { title } = this.props.route.params
    const { question, answer } = this.state

    console.log('title :>> ', title)

    let questionData = {
      question,
      answer,
    }

    try {
      await addCardToDeck(title, questionData)
      this.setState({ question: '', answer: '' })
      dispatch(updateCard(title, questionData))
      this.props.navigation.pop()
    } catch (error) {
      console.log('error updating deck :>> ', error)
    }
  }
  render() {
    const { question, answer } = this.state
    let disabled

    if (!question || !answer) {
      disabled = true
    } else {
      disabled = false
    }

    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View>
              <Text style={styles.header}>Question</Text>
              <TextInput
                onChangeText={this.handleQuestionChange}
                value={this.state.question}
                placeholder="Enter the question"
                style={styles.textInput}
              />
            </View>
            <View>
              <Text style={styles.header}>Answer</Text>
              <TextInput
                onChangeText={this.handleaAnswerChange}
                value={this.state.answer}
                placeholder="Enter the answer to the question"
                style={styles.textInput}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                disabled={disabled}
                style={[disabled ? styles.disabled : styles.button]}
                onPress={this.handleSubmit}
              >
                <Text style={styles.buttonText}> Create Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
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
  disabled: {
    flex: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
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

export default connect()(CreateCard)
