import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleFont from '../pages/singleFont/SinfgleFont'

interface RouteProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}
const index:React.FC<RouteProps> = ({search, setSearch}) => {
  return (
    <Routes>
        <Route path='/' element={<Home search={search} setSearch={setSearch}/>}/>
        <Route path='/:name' element={<SingleFont search={search} setSearch={setSearch}/>}/>
    </Routes>
  )
}

export default index