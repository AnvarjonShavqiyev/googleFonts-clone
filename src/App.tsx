import { useState } from 'react'
import './App.css'
import './_reset.scss'
import RouteController from './routes'
function App(){
  const [search, setSearch] = useState<any>("")
  return (
    <>
      <RouteController search={search} setSearch={setSearch}/>
    </>
  )
}

export default App
