import { AsyncStorage } from 'react-native'
import { formatDecks, DECKS_STORAGE_KEY } from './_decks'

export function fetchDeckInformations() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDecks)
}

export function createDeck({ entry, key }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  )
}

export function removeEntry(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
  })
}
