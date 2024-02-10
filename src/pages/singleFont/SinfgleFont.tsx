import { useParams } from "react-router-dom"
import './SingleFonts.scss'
import { Container } from "../../utils/Utils";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
interface SingleProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}
const SinfgleFont:React.FC<SingleProps> = ({search, setSearch}) => {
  const {name} = useParams();
  useEffect(()=>{
    
  },[search])
  return (
    <>
      <Navbar search={search} setSearch={setSearch}/>
      <Container>
        <div className="single-font-wrapper">
            <h4 className="single-font-title">{name}</h4>
            <p style={{fontSize:"55px", lineHeight:"65px", marginTop:"50px", textAlign:"center", fontFamily:name + ' regular'}}>Whereas disregard and contempt for human rights have resulted</p>
        </div>
      </Container>
    </>
  )
}

export default SinfgleFont