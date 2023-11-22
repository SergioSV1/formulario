import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='fondoPrincipal'>
      <Main/>
    </div>
  )
}

export default App
