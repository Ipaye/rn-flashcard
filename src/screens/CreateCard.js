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

class CreateCard extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View>
              <Text style={styles.header}>Question</Text>
              <TextInput placeholder="Enter the question" style={styles.textInput} />
            </View>
            <View>
              <Text style={styles.header}>Card Name</Text>
              <TextInput placeholder="Enter the answer to the question" style={styles.textInput} />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.button} onPress={() => null}>
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

export default CreateCard
