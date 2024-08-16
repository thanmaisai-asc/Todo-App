import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <h1 className='text-5xl'>Hello Developers</h1>
    </Provider>
  )
}

export default App
