import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { getDecks } from '../utils/api'
import DeckItem from '../components/Deckitem'

import { receiveDecks } from '../actions'

class Decks extends React.Component {
  async componentDidMount() {
    this.fetchDecks()
  }

  fetchDecks = async () => {
    const { dispatch } = this.props
    try {
      const decks = await getDecks()
      dispatch(receiveDecks(decks))
      this.setState({ decks: decks })
    } catch (error) {
      console.log('Error fetching data :>> ', error)
    }
  }

  state = {
    decks: {},
  }

  render() {
    const { decks } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.PageHeading}>All Decks </Text>
        </View>
        <ScrollView style={styles.scrolling}>
          {Object.keys(decks)
            .reverse()
            .map((deck, index) => (
              <DeckItem {...this.props} deckInfo={decks[deck]} key={index} />
            ))}
        </ScrollView>
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
  scrolling: {
    marginBottom: 20,
  },
})

function mapStateToProps(decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(Decks)
