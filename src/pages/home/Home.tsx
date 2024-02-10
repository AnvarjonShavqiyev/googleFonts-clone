import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Reel from "../../components/reel/Reel"
interface HomeProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}
const Home:React.FC<HomeProps> = ({search, setSearch}) => {
  const [example, setExample] = useState<String>(" Everyone has the right to freedom of thought, conscience and")
  return (
    <div>
      <Navbar search={search} setSearch={setSearch}/>
      <Reel example={example} search={search}/>
    </div>
  )
}

export default Home