import ButtonsGame from "./components/ButtonsGame"
import GamePlaces from "./components/GamePlaces"
import Header from "./components/Header"
import UserState from "./context/UserState"

import shuffle from 'underscore/modules/shuffle.js'

function App() {
  
  return (
    <UserState>
     <Header/>
     <ButtonsGame/>
     <GamePlaces/>
    </UserState>
  )
}

export default App
