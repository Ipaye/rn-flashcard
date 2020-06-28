import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'

export default function DeckItem(props) {
  const navigateToDetailsPage = () => {
    console.log('pross :>> ', props)
    props.navigation.navigate('Detail', { state: props.deckInfo })
  }

  return (
    <ScrollView>
      <TouchableOpacity onPress={navigateToDetailsPage} style={styles.deckItem}>
        <Image source={require('../assets/1.png')} style={styles.deckIcon} />
        <View style={styles.deckDescription}>
          <Text style={styles.deckTitle}>{props.deckInfo.title}</Text>
          <Text style={styles.deckSubtitle}>▶ {props.deckInfo.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
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
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
  },
  deckSubtitle: {
    fontSize: 18,
    marginTop: 3,
    color: '#0000006e',
  },
})
