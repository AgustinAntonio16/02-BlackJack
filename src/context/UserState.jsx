import React, {useReducer}from 'react'

import UserReducer from "./UserReducer"
import UserContext from './UserContext'

import shuffle from 'underscore/modules/shuffle.js'

const UserState = (props) => {

  const initialState = {
    user: [],
    selectedUser:  null
  }

  const saludo = (name) =>{
    console.log("Hola desde " + name)
  }

  const [state, dispatch] = useReducer( UserReducer, initialState)

  let newCard
  let maxNumCard     = 10;
  let deck           = [];
  const types        = ["C", "D", "H", "S"]
  const specialTypes = ["A", "J", "Q", "K"]

  let createDeck = () => {
    for( let i = 2; i <= maxNumCard; i++){
      for(let type of types) {
        deck.push(i + type)
      }
    }
    for(let type of types){
      for(let special of specialTypes){
        deck.push(type + special)
      }
    }
    deck = shuffle(deck)
    //console.log("Hola desde 'createDeck'")
  }

  
  
  let requestCard = () =>{
    const card =deck.shift()
    createDeck()
    console.log(card)
    return card
  }

  let pushButton = (plase) =>{
    console.log(requestCard())
  }
  
  // let cardValue = (card) =>{
  //   const value = str.substring(0,str.length - 1)
  //   return (isNaN(value)) ? ((value === "A") ? 11: 10) : (value * 1)
  // }
  
  //console.log(cardValue(requestCard()))
  
  return (
    <UserContext.Provider value = {{
      saludo,
      pushButton,
      createDeck, 
      requestCard
    }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState