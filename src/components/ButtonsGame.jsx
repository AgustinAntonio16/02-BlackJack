import React, {useEffect,useContext} from 'react'
import UserContext from '../context/UserContext'


const ButtonsGame = () => {

   const {saludo, pushButton, createDeck, requestCard} = useContext(UserContext)
   const location = "ButtonGame"
 
   useEffect(() =>{
     saludo(location)
   },[])

  return (
    <div className='text-center'>
        <button className="btn-custom btn-primary" onClick={() => requestCard()}>
           <h1 className='font-bold font-Quicksand text-'>Nuevo Juego</h1>
        </button>

        <button className='bg-Buttons mt-2 rounded-md m-2 w-32' onClick={() => pushButton("+ card")}>
           <h1 className='p-2 font-bold font-Quicksand text-white'>Otra carta</h1>
        </button>

        <button className='bg-Buttons mt-2 rounded-md m-2 w-32' onClick={() => pushButton("voy")}>
           <h1 className='p-2 font-bold font-Quicksand text-white'>Voy</h1>
        </button>
    </div>
  )
}

export default ButtonsGame