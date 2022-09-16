import React, {useEffect,useContext} from 'react'
import UserContext from '../context/UserContext'

const Card1 = new URL("../assets/2C.png", import.meta.url);
const Card2 = new URL("../assets/2D.png", import.meta.url);

const GamePlaces = () => {

  const {saludo} = useContext(UserContext)
  const location = "GamePlaces"

  useEffect(() =>{
    saludo(location)
  },[])
  
  return (
    <div>
        <h1 className='font-bold text-xl mx-4 '>Jugador 1</h1>
        <div className='h-96 flex relative'>
            <img className="h-80 m-6 absolute" src={Card1}/>
            <img className="h-80 m-6 absolute mx-20 " src={Card1}/>
            <img className="h-80 m-6 absolute mx-40 " src={Card1}/>
            <img className="h-80 m-6 absolute mx-60 " src={Card1}/>
        </div>

        <h1 className='font-bold text-xl mx-4 '>Computadora</h1>
        <div className='h-96 flex relative'>
            <img className="h-80 m-6 absolute" src={Card2}/>
            <img className="h-80 m-6 absolute mx-20 " src={Card2}/>
            <img className="h-80 m-6 absolute mx-40 " src={Card2}/>
           
        </div>
    </div>
  )
}

export default GamePlaces