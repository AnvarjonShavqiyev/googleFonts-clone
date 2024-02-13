import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Reel from "../../components/reel/Reel"
import './Home.scss'
interface HomeProps {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}
const Home:React.FC<HomeProps> = ({search, setSearch}) => {
  const [example] = useState<String>(" Everyone has the right to freedom of thought, conscience and")
  return (
      <>
        <Navbar search={search} setSearch={setSearch}/>
        <Reel example={example} search={search}/>
      </>    
  )
}

export default Home