import { useDispatch, useSelector } from 'react-redux'

import type { TAppDispatch, TRootState } from './state/store'
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  incrementAsync
} from './state/counter/counter-slice'
import './App.css'


export default function App() {
  const count = useSelector((state: TRootState) => state.counter.value)
  // getting this from store.ts, i.e. from central store

  const dispatch = useDispatch<TAppDispatch>();
  // used for updating the state


  return (
    <div>
      <h1>{count}</h1>

      <div>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>Decrement by 10</button>
        <button onClick={() => dispatch(incrementAsync(15))}>Increment async by 15</button>
        <button onClick={() => dispatch(decrementByAmount(15))}>Decrement by 15</button>
      </div>
    </div>
  )
}

