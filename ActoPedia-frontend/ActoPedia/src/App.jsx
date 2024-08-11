import { useState } from 'react'
import ListActors from './pages/ListActors'
import IformationActors from './pages/IformationActors'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/Protected/ProtectedRoute'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'



function App() {

  const { token } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />

          <Route element={<ProtectedRoute canActivate={token} redirectPath='/'/>}>
            <Route path="/home" element={<ListActors />} />
          </Route>
          <Route element={<ProtectedRoute canActivate={token} redirectPath='/'/>}>
            <Route path="/IformationActor" element={<IformationActors />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
