import React, {useEffect,useContext} from 'react'
import UserContext from '../context/UserContext'

const Header = () => {
  
  const {saludo} = useContext(UserContext)
  const location = "Header"

  useEffect(() =>{
    saludo(location)
  },[])

  return (
    <div>
      <h1 className='text-center bg-secondaryColor p-5 font-bold text-xl font-Quicksand'>
        BackJack  
      </h1>

     
    </div>
  )
}

export default Header
