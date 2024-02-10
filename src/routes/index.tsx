import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SingleFont from '../pages/singleFont/SinfgleFont'

const index:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:name' element={<SingleFont/>}/>
    </Routes>
  )
}

export default index