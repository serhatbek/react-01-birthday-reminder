import './App.scss';
import { useState } from 'react';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className='btn' onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
