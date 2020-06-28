import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import { fetchDeckInformations } from '../utils/api'
import DeckItem from '../components/Deckitem'

class Decks extends React.Component {
  async componentDidMount() {
    try {
      const decks = await fetchDeckInformations()
      console.log('decks :>> ', decks)
      this.setState({ decks: decks })
    } catch (error) {
      console.log('Errro fetching data :>> ', error)
    }
  }

  state = {
    decks: {},
  }

  render() {
    const { decks } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.PageHeading}>All Decks </Text>
        </View>

        {Object.keys(decks).map((deck, index) => (
          <DeckItem {...this.props} deckInfo={decks[deck]} key={index} />
        ))}
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
})

export default Decks
