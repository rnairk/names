import React, { useContext } from 'react'
import NamesContext from '../context/NamesContext'

const NamesList = () => {

    const namesContext = useContext(NamesContext)

    const names = namesContext?.details

    return (
        <div>
            <h1 className='text-2xl'>List of Names</h1>
            <ul>
                {names && names.map(d => <li className='hover:cursor-pointer' key={d.text} onClick={() => namesContext?.updateSelected(d)}>
                    {d.text}
                </li>)}
            </ul>

        </div>
    )
}

export default NamesList