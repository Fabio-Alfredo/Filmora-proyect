import { useState } from 'react'
import ListActors from './pages/ListActors'
import IformationActors from './pages/IformationActors'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListActors /> */}
      <IformationActors />
    </>
  )
}

export default App
