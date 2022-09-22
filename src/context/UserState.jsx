import React, {useReducer, useState}from 'react'

import UserReducer from "./UserReducer"
import UserContext from './UserContext'

const Card1 = new URL("../assets/2C.png", import.meta.url);

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

  let maxNumCard     = 10;
  let deck           = [];
  const types        = ["C", "D", "H", "S"]
  const specialTypes = ["A", "J", "Q", "K"]
  const [playerPoints, setPlayerPoints] = useState(0)
  const [newCard, setNewCard] = useState("")
  const [disablesButtonPedir, setDisablesButtonPedir] = useState(false)
  let divCardsPlayer = document.querySelector("#cardsPlayer")
  let computerPoints = 0;

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

  createDeck()
  let requestCard = () =>{
    const card =deck.shift()
    //console.log(card)
    return card
  }

  let cardValue = (str) =>{
    const value = str.substring(0,str.length - 1)
    return (isNaN(value)) ? ((value === "A") ? 11: 10) : (value * 1)
  }

  let pushButtonNewGame = () =>{
    console.log("Push NewGame")
  }

  let pushButtonPedir = () =>{
    setNewCard(requestCard())
    //let newCard = "3C"
    console.log("Este es la carta" + newCard)
    let value = cardValue(requestCard())
    setPlayerPoints(playerPoints + value)

    if(playerPoints >= 21){
      setDisablesButtonPedir(true)
    }

    const createImgCard = document.createElement("img")
    createImgCard.src = `src/assets/${newCard}.png`
    divCardsPlayer.append(createImgCard)
    console.log(playerPoints)
  }

  let pushButtonVoy = () =>{
    console.log("Push Voy")
  }
  
  //console.log(cardValue(requestCard()))
  
  return (
    <UserContext.Provider value = {{
      pushButtonNewGame,
      pushButtonPedir,
      pushButtonVoy, 
      playerPoints,
      newCard,
      disablesButtonPedir
    }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState