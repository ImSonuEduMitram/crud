import { useState } from 'react'
import home from './home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <home/>
    </>
  )
}

export default App
