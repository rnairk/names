import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NamesDetail from './components/NamesDetail';
import NamesList from './components/NamesList';
import NamesContext from './context/NamesContext';
import { Name } from './types';

function App() {

  const details: Name[] = [
    {
      text: 'Ranjit',
      desc: 'He is the husband, works in an IT company, mostly a bum',
      hobby: ['sketching', 'reading']
    },
    {
      text: 'Shyama',
      desc: 'She is the wife, works in an IT startup company, loves to cook and eat',
      hobby: ['reading']
    },
    {
      text: 'Vinayak',
      desc: 'He is seven, goes to Euro School, loves to watch TV, rejects nature',
      hobby: ['playing']
    },
    {
      text: 'Nami',
      desc: 'She is one, poops all the time, loves to climb things',
      hobby: ['eating', 'pooping']
    }]

  const [selected, setSelected] = useState(details[0])

  const updateSelected = (name: Name) => {
    setSelected(name)
  }

  return (
    <NamesContext.Provider value={{ details, selected, updateSelected }}>
      <main className='flex flex-col w-screen h-screen'>
        <Header />
        <div className='grow flex justify-around items-center'>
          <NamesList />
          <NamesDetail />
        </div>
      </main>
    </NamesContext.Provider>
  );
}

export default App;
