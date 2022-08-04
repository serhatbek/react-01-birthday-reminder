import List from './List';

const ListCard = ({ people, setPeople }) => {
  return (
    <div className='list-card'>
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button className='btn' onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

export default ListCard;
