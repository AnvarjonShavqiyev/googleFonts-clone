import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Reel from "../../components/reel/Reel"
import './Home.scss'
interface HomeProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}
const Home:React.FC<HomeProps> = ({search, setSearch}) => {
  const [example, setExample] = useState<String>(" Everyone has the right to freedom of thought, conscience and")
  const [fontSize, setFontSize] = useState<Number>(48)
  return (
      <>
        <Navbar search={search} setSearch={setSearch}/>
        <Reel example={example} search={search} fontSize={fontSize}/>
      </>    
  )
}

export default Home