import { useEffect, useState } from "react"
import { Container } from "../../utils/Utils"
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import './Reel.scss'
import { RiErrorWarningLine } from "react-icons/ri";

const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q"
const Reel:React.FC = () => {
    const [fonts, setFonts] = useState([]);
    useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)    
        .then(response => response.json())
        .then(data => setFonts(data.items))
    },[])
    console.log(fonts)
    return (
      fonts.length > 0 && <Container>
        <div className="reel-wrapper">
            <div className="reel-header">
                <p className="reel-header-info">{fonts.length} of {fonts.length} families</p>
                <Tooltip sx={{ color:"#000",'&:hover': { backgroundColor: 'rgb(230,230,230)' } }} title='Search results are based on font and font designer names which most closely match your query, and are ranked using the following factors: (1) web usage of the font family; (2) trend in web usage of the font family; (3) the number of styles in the font family; (4) the date the font family was added to Google Fonts; and/or (5) how applicable the font family is to the dominant language(s) in your country (based on your location and settings). The relative weight given to each factor is determined by the sorting method you choose—for example, the date the font family was added to Google Fonts will play a bigger role if you choose to sort by "Newest".' placement="bottom">
                    <Button className="about-btn">About these results <RiErrorWarningLine className="warning-icon"/></Button>
                </Tooltip>
            </div>
            <div className="fonts-reel">
                {
                    fonts.map((font:any) => {
                        return <div>
                            <div className="font-reel-header">
                                <p className="font-title">{font.family}</p>
                                <p className="font-count">{font.variants.length} styles</p>
                            </div>
                            <p> Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.
                            Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.
                            Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay. </p>
                        </div>
                    })
                }
            </div>
        </div>
      </Container>
  )
}

export default Reel