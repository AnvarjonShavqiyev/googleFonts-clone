import { useNavigate, useParams } from "react-router-dom"
import './SingleFonts.scss'
import { Container } from "../../utils/Utils";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { MdAddCircleOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateFonts } from "../../redux/features/bagSlice";
import { FontType } from "../../types/ElementTypes";
interface SingleProps {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}

const SinfgleFont:React.FC<SingleProps> = ({search, setSearch}) => {
  const {name} = useParams();
  const navigate = useNavigate();
  const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q"
  const [currentFont, setCurrentFont] = useState([]);
  const [fontSize, setFontSize] = useState<number>(48)
  const [exampletext, setExamletext] = useState<string>("Whereas recognition of the inherent dignity")
  const dispatch = useDispatch();
  const fontsState = useSelector((state:any) => state.bagRoot.fonts)
  const [fontTypes, setFontTypes] = useState<string[]>([]);
  const [state, setState] = useState<boolean>(false);

  useEffect(()=>{
    !name && search.length > 0 && navigate("/")
  },[search])
  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&family=${name}`)    
        .then(response => response.json())
        .then(data => {
          setCurrentFont(data.items[0].variants)
        })
  },[])

  useEffect(() =>{
    if(fontsState[fontsState.findIndex((font:FontType) => font.fontName === name)]){
      setFontTypes(fontsState[fontsState.findIndex((font:FontType) => font.fontName === name)].variants)
    }
  },[])
  function addFont(variant: string) {
    setState(true);
    setFontTypes((prevFontTypes) => [...prevFontTypes, variant]);
  }
  
  function removeFont(variant: string) {
    setState(true);
    setFontTypes((prevFontTypes) => prevFontTypes.filter((type) => type !== variant));
  }
  useEffect(() => {
    state && dispatch(updateFonts({
      fontName: name,
      variants: fontTypes 
    }))
  },[fontTypes])
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
              <input value={fontSize} type="range" min="8" max="100" onChange={(e:any) => setFontSize(e.target.value)} className="slider" id="mySlider"/>
            </div>
        </div>
        <div className="single-font-variants">
              {
                currentFont.map((variant:string, index:number) => {
                  return <div key={index} className="font-variant-wrapper">
                      <div>
                      <p>{name + ' '}{variant.includes('0') ? variant.slice(0,3) + ' ' + variant.slice(3, variant.length) : variant} </p>
                      {variant.includes('italic') ? 
                      <em style={{display:"block", margin:"25px 0 40px 0",fontFamily:`${(name+variant).split(' ').join("")}`, fontWeight:variant.length > 3 ? variant.slice(0,3) : variant, fontSize:`${fontSize}px`}}>{exampletext}</em>
                      :
                      <p style={{margin:"25px 0 40px 0",fontFamily:`${(name+variant).split(' ').join("")}`, fontWeight:variant.length > 3 ? variant.slice(0,3) : variant, fontSize:`${fontSize}px`}}>{exampletext}</p>
                     }
                      </div>
                      {
                        fontTypes.indexOf(variant) === -1 ?
                        <Button onClick={() => addFont(variant)} sx={{fontSize:"14px", display:"flex", gap:"5px", alignItems:"center"}} color="primary">
                          {`${"Select"} ${name} ${variant.includes('0') ? variant.slice(0,3) + ' ' + variant.slice(3, variant.length) : variant}`}
                          { <MdAddCircleOutline className={`${fontTypes.indexOf(variant) === -1 ? 'font-add-btn' : 'no-rotate'}`} /> }</Button>
                        : 
                        <Button 
                      onClick={() => removeFont(variant)} 
                      sx={{fontSize:"14px", display:"flex", gap:"5px", alignItems:"center"}} 
                      color="primary"
                      >
                        {`${"Remove"} ${name} ${variant.includes('0') ? variant.slice(0,3) + ' ' + variant.slice(3, variant.length) : variant}`}
                        {<IoMdRemoveCircleOutline className={`${'no-rotate'}`} />
                        }
                      </Button>
                     }
                  </div>
                })
              }
            </div>
      </Container>
    </>
  )
}

export default SinfgleFont