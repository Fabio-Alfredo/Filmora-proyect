import { useState } from 'react'
import ListActors from './pages/ListActors'
import IformationActors from './pages/IformationActors'
import SignIn from './pages/SignIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListActors /> */}
      {/* <IformationActors /> */}
      <SignIn />
    </>
  )
}

export default App
