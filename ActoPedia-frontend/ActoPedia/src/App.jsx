import { useState } from 'react'
import ListActors from './pages/ListActors'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListActors />
    </>
  )
}

export default App
