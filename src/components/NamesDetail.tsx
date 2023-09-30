import React, { useContext } from 'react'
import NamesContext from '../context/NamesContext'

const NamesDetail = () => {

    const namesContext = useContext(NamesContext)
    
  return (
    <div className='flex flex-col w-52 space-y-5'>
        <header className='text-xl font-bold'>{namesContext?.selected.text}</header>
        <section>{namesContext?.selected.desc}</section>
        <div className='flex'>
            {namesContext?.selected.hobby.map(h => <div className='rounded-xl text-center px-2 p-1 border-2 shadow-sm'>{h}</div>)}
            
        </div>
    </div>
  )
}

export default NamesDetail