import { useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Reel from "../../components/reel/Reel"

const Home:React.FC = () => {
  const [example, setExample] = useState<String>(" Everyone has the right to freedom of thought, conscience and")
  return (
    <div>
      <Navbar/>
      <Reel example={example}/>
    </div>
  )
}

export default Home