import { useState } from 'react'
import ListActors from './pages/ListActors'
import IformationActors from './pages/IformationActors'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/Protected/ProtectedRoute'
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ListActors" element={<ListActors />} />
        <Route path="/IformationActors" element={<IformationActors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
