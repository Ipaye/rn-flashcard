import { AsyncStorage } from 'react-native'
import { formatDecks, DECKS_STORAGE_KEY } from './_decks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks)
}

export function saveDeckTitle(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck(deck, question) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const decks = JSON.parse(results)
    let currentDeck = decks[deck]
    currentDeck.questions.push(question)
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks))
  })
}

export async function getDeck(deckTitle) {
  try {
    let results = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    const decks = JSON.parse(results)
    let currentDeck = decks[deckTitle]
    return currentDeck
  } catch (error) {
    console.log('error :>> ', error)
  }
}
