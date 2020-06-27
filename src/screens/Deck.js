import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'

export default function Decks(props) {
  const navigateToDetailsPage = () => {
    console.log('pross :>> ', props)
    props.navigation.navigate('Detail')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.PageHeading}>All Decks </Text>
      </View>

      <ScrollView>
        <TouchableOpacity onPress={navigateToDetailsPage} style={styles.deckItem}>
          <Image source={require('../assets/1.png')} style={styles.deckIcon} />
          <View style={styles.deckDescription}>
            <Text style={styles.deckTitle}>Jacscript Deck</Text>
            <Text style={styles.deckSubtitle}>▶ 18 cards</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* End of scroll view */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  PageHeading: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 20,
  },

  deckItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  deckIcon: {
    height: 70,
    width: 70,
    marginRight: 10,
  },

  deckDescription: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  deckTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  deckSubtitle: {
    fontSize: 18,
    marginTop: 3,
    color: 'grey',
  },
})
