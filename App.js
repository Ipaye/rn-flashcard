import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { NavigationContainer, DrawerActions } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Feather } from '@expo/vector-icons'

import CreateCard from './src/screens/CreateCard'
import CreateDeck from './src/screens/CreateDeck'
import Decks from './src/screens/Deck'
import DeckDetail from './src/screens/DeckDetail'
import Quiz from './src/screens/Quiz'
import reducer from './src/reducers'

const Drawer = createDrawerNavigator()
const Stacks = createStackNavigator()

class App extends React.Component {
  createHomeStack = () => (
    <Stacks.Navigator>
      <Stacks.Screen
        name="Home"
        children={this.createDrawer}
        options={({ navigation }) => ({
          title: 'Flash Card',
          headerLeft: () => (
            <Feather
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={[{ color: 'black', marginLeft: 14 }]}
              size={24}
              name={'menu'}
            />
          ),
        })}
      />
      <Stacks.Screen
        name="Detail"
        component={DeckDetail}
        options={{
          title: 'Deck Details',
        }}
      />
      <Stacks.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: 'Quiz',
        }}
      />
      <Stacks.Screen
        name="CreateCard"
        component={CreateCard}
        options={{
          title: 'Create Card',
        }}
      />
    </Stacks.Navigator>
  )

  createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Decks" component={Decks} />
      <Drawer.Screen name="Create Deck" component={CreateDeck} />
    </Drawer.Navigator>
  )

  stackNavigation = () => {
    return (
      <Stacks.Navigator>
        <Stacks.Screen name="Deck-Details" component={DeckDetail} />
        <Stacks.Screen name="Quiz" component={Quiz} />
        <Stacks.Screen name="Create Card" component={CreateCard} />
      </Stacks.Navigator>
    )
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <StatusBar style="auto" />
        <NavigationContainer>{this.createHomeStack()}</NavigationContainer>
      </Provider>
    )
  }
}

export default App
