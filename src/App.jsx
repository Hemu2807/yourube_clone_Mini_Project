import { useState } from 'react'
import CompnentFile from './Component/CompnentFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompnentFile />
    </>
  )
}

export default App
