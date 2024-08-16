import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  )
}

export default App
