import { useNavigate, useParams } from "react-router-dom"
import './SingleFonts.scss'
import { Container } from "../../utils/Utils";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";

interface SingleProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}

const SinfgleFont:React.FC<SingleProps> = ({search, setSearch}) => {
  const {name} = useParams();
  const navigate = useNavigate();
  const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q"
  const [currentFont, setCurrentFont] = useState([]);
  const [fontSize, setFontSize] = useState<number>(48)
  const [exampletext, setExamletext] = useState<string>("Whereas recognition of the inherent dignity")
  const [state, setState] = useState<boolean>(true);
  useEffect(()=>{
    !name && search.length > 0 && navigate("/")
  },[search])
  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&family=${name}`)    
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setCurrentFont(data.items[0].variants)
        })
    },[])
    return (
    currentFont && <>
      <Navbar search={search} setSearch={setSearch}/>
      <Container>
        <div className="single-font-wrapper">
            <h4 className="single-font-title">{name}</h4>
            <p style={{fontSize:"55px", lineHeight:"65px", marginTop:"50px", textAlign:"center", fontFamily:name?.split(' ').join("") + 'regular'}}>Whereas disregard and contempt for human rights have resulted</p>
        </div>
        <h5 style={{fontFamily:"googlesans", fontSize:"30px", marginTop:"60px"}}>Styles</h5>
        <div className="single-filter-wrapper">
            <TextField sx={{width:"70%"}} id="outlined-basic" label="Type here to preview text" variant="outlined" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {e.target.value.length > 0 ? setExamletext(e.target.value) : setExamletext("Whereas recognition of the inherent dignity")}}/>
            <div className="slider-container">
              <p style={{fontSize:"18px", width:"40px"}}>{fontSize}</p>
              <input value={fontSize} type="range" min="8" max="100" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFontSize(e.target.value)} className="slider" id="mySlider"/>
            </div>
        </div>
        <div className="single-font-variants">
              {
                currentFont.map((variant:string) => {
                  return <div className="font-variant-wrapper">
                      <div>
                      <p>{name + ' '}{variant.includes('0') ? variant.slice(0,3) + ' ' + variant.slice(3, variant.length) : variant} </p>
                      {variant.includes('italic') ? 
                      <em style={{display:"block", margin:"25px 0 40px 0",fontFamily:`${(name+variant).split(' ').join("")}`, fontWeight:variant.length > 3 ? variant.slice(0,3) : variant, fontSize:`${fontSize}px`}}>{exampletext}</em>
                      :
                      <p style={{margin:"25px 0 40px 0",fontFamily:`${(name+variant).split(' ').join("")}`, fontWeight:variant.length > 3 ? variant.slice(0,3) : variant, fontSize:`${fontSize}px`}}>{exampletext}</p>
                     }
                      </div>
                      <Button onClick={() => setState(!state)} sx={{fontSize:"14px", display:"flex", gap:"5px", alignItems:"center"}} color="primary">{`${state ? "Select" : "Remove"} ${name} ${variant.includes('0') ? variant.slice(0,3) + ' ' + variant.slice(3, variant.length) : variant}`}{state ? <MdAddCircleOutline className={`${state ? 'font-add-btn' : 'no-rotate'}`}/> : <IoMdRemoveCircleOutline className={`${state ? 'font-add-btn' : 'no-rotate'}`}/>}</Button>
                  </div>
                })
              }
            </div>
      </Container>
    </>
  )
}

export default SinfgleFont