import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'

function App({children, heroes, toggleFavorite}) {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* children è il Menù */}
      {children}
     
      {heroes !== null ? (
        heroes.map(h => (
          <Hero key={h.id} hero={h} toggleFavorite={() =>toggleFavorite(h.id)} />
        ))
      ) : (
        <h1>nessun supereroe disponibile...</h1>
      )}
     
    </>
  )
}

export default App
