import { useRoutes } from 'react-router-dom'
import './App.css'
import { router } from 'router'

function App() {

  return (
    <div>{useRoutes(router)}</div>
  )
}

export default App
