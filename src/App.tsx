import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Intro from './pages/Intro'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Intro/>} />
        <Route index path='/solution' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
