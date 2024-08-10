import { useState } from 'react'
import ListActors from './pages/ListActors'
import IformationActors from './pages/IformationActors'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ListActors /> */}
      {/* <IformationActors /> */}
      {/* <SignIn /> */}
      <SignUp />
    </>
  )
}

export default App
