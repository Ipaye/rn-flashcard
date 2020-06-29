import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

class Quiz extends React.Component {
  state = {
    currentIndex: 0,
    pageIndex: 1,
    questionAnswered: 0,
    questionCount: 0,
    toggleAnswer: false,
  }

  componentDidMount() {
    const questionCount = this.props.currentDeck.questions.length

    this.setState({ questionCount })
  }

  resetState = (_) => {
    this.setState({ currentIndex: 0, pageIndex: 1, questionAnswered: 0, toggleAnswer: false })
  }

  nextQuestion = (option) => {
    if (option == 'correct') {
      this.setState((previousState) => ({
        currentIndex: previousState.currentIndex + 1,
        pageIndex: previousState.pageIndex + 1,
        questionAnswered: previousState.questionAnswered + 1,
      }))
    } else {
      this.setState((previousState) => ({
        pageIndex: previousState.pageIndex + 1,
        currentIndex: previousState.currentIndex + 1,
      }))
    }
  }

  markup = () => {
    const { questions, currentIndex, questionAnswered, questionCount, toggleAnswer, pageIndex } = this.state
    if (pageIndex > questionCount) {
      return (
        <View style={styles.container}>
          <View style={styles.fullpage}>
            <Text style={styles.deckname}>Results </Text>
            <Text style={styles.deckdetails}>
              {questionAnswered} / {questionCount}
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.button} onPress={this.resetState}>
                <Text style={styles.buttonText}>Restart Quiz</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.pop()}>
                <Text style={styles.buttonText}>Back to deck</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.PageHeading}>
            Question {pageIndex}/{questionCount}
          </Text>
          <View style={styles.quizBody}>
            <View style={styles.questionBox}>
              {toggleAnswer === false ? (
                <Text style={styles.quizText}>{this.props.currentDeck.questions[currentIndex].question}</Text>
              ) : (
                <Text style={styles.quizText}>{this.props.currentDeck.questions[currentIndex].answer}</Text>
              )}
            </View>
            <View style={styles.buttonFixed}>
              <TouchableOpacity style={[styles.button]} onPress={this.toggleAnswer}>
                {toggleAnswer === false ? (
                  <Text style={styles.buttonText}>Show Answer</Text>
                ) : (
                  <Text style={styles.buttonText}>Show Question</Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={[styles.button, styles.correct]} onPress={() => this.nextQuestion('correct')}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.inCorrect]}
                onPress={() => this.nextQuestion('inCorrect')}
              >
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }

  toggleAnswer = (_) => {
    this.setState((previousState) => ({
      toggleAnswer: !previousState.toggleAnswer,
    }))
  }

  render() {
    const { questions, currentIndex, questionAnswered, questionCount, toggleAnswer, pageIndex } = this.state
    return this.markup()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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

  fullpage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // padding: 20,
  },
  PageHeading: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20,
  },
  quizBody: {
    flex: 1,
    justifyContent: 'space-around',
  },
  quizText: {
    fontSize: 22,
  },
  questionBox: {
    backgroundColor: 'white',
    height: 300,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 2,
  },
  button: {
    flex: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFixed: {
    height: 30,
    alignSelf: 'center',
    // justifyContent: 'space-around',
  },
  correct: {
    backgroundColor: 'green',
  },
  inCorrect: {
    backgroundColor: 'red',
  },
  disabled: {
    flex: 1,
    backgroundColor: 'grey',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    height: 100,
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

  console.log('currentDeck :>> ', currentDeck)

  return {
    currentDeck,
  }
}

export default connect(mapStateToProps)(Quiz)
