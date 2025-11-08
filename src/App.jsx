import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PageContent } from './Utiltity'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <PageContent></PageContent>
    </>
  )
}

export default App
