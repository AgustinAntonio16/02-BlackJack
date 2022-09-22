import React, {useEffect,useContext} from 'react'
import UserContext from '../context/UserContext'


const ButtonsGame = () => {

   const {pushButtonNewGame, pushButtonPedir, pushButtonVoy, disablesButtonPedir} = useContext(UserContext)
   const location = "ButtonGame"
 
   // useEffect(() =>{
   //   saludo(location)
   // },[])


  return (
    <div className='text-center'>
        <button className="btn-custom btn-primary" onClick={() => pushButtonNewGame()}>
           <h1 className='font-bold font-Quicksand text-'>Nuevo Juego</h1>
        </button>

        <button className='bg-Buttons mt-2 rounded-md m-2 w-32' 
        onClick={() => pushButtonPedir()}
        disabled={disablesButtonPedir}>
           <h1 className='p-2 font-bold font-Quicksand text-white'>Otra carta</h1>
        </button>

        <button className='bg-Buttons mt-2 rounded-md m-2 w-32' onClick={() => pushButtonVoy()}>
           <h1 className='p-2 font-bold font-Quicksand text-white'>Voy</h1>
        </button>
    </div>
  )
}

export default ButtonsGame