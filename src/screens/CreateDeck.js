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

class Decks extends React.Component {
  navigateToDetailsPage = () => {
    console.log('pross :>> ', this.props)
    this.props.navigation.navigate('Detail')
  }
  render() {
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
                <TextInput placeholder="Enter the name of the deck" style={styles.textInput} />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.button} onPress={() => null}>
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
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default Decks
