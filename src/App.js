import './App.scss';
import { useState } from 'react';
import ListCard from './ListCard';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <ListCard people={people} setPeople={setPeople} />
    </main>
  );
}

export default App;
