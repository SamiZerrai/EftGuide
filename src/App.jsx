import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { HeroUIProvider } from '@heroui/react'
import Home from './routes/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maps from './routes/Maps/Maps'
import Quests from './routes/Quests/Quests'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <HeroUIProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/quests" element={<Quests />} />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  )
}

export default App
