import Greeting from './Greeting';
import Counter from "./Counter.jsx";
import ListName from './ListName.jsx';

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div className='app'>
      <Greeting name={"Bryan"} />
      <Counter />
      <ListName listName={names} />
    </div>
  );
}

export default App;
