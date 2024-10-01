import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';

function App() {

  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  console.log(count);


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease </button>
    </div>
  );
}

export default App;
