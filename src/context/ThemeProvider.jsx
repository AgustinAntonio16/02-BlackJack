import React from 'react'

import shuffle from 'underscore/modules/shuffle.js'

export const ThemeContext = React.createContext()

 const ThemeProvider = (props) => {
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
    console.log("Hola desde 'createDeck'")
  }

  
  
  let requestCard = () =>{
    const card =deck.shift()
    return card
  }
  
  let cardValue = (card) =>{
    let points = 0
    const value = card.substring(0,card.length - 1)
    return (isNaN(value)) ? ((value === "A") ? 11: 10) : (value * 1)
  }
  
  console.log(cardValue(requestCard()))

  return (
    <ThemeProvider.Provider value = {{createDeck,}}>
        {props.children}
    </ThemeProvider.Provider>
  )
}

export default ThemeProvider