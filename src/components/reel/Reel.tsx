import { useEffect, useState } from "react"
import { Container } from "../../utils/Utils"
import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import './Reel.scss'
import { RiErrorWarningLine } from "react-icons/ri";
import { Link} from "react-router-dom";

interface ReelProps {
  example:String,
  search:String
}
const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q"
const Reel:React.FC<ReelProps> = ({example, search}) => {
    const [response, setResponse] = useState([]);
    const [fonts, setFonts] = useState([]);
    useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)    
        .then(response => response.json())
        .then(data => {
          setResponse(data.items)
        })
    },[])
    useEffect(() => {
      if (search.length > 0) {
        const filteredFonts = response.filter((font: { family?: string }) =>   
        font?.family && font.family.toLowerCase().includes(search.toLowerCase())
        );
        console.log(filteredFonts);
        setFonts(filteredFonts);
      } else {
        setFonts(response);
      }
    }, [search, response]);
    
    
    
    return (
      fonts.length > 0 && <Container>
        <div className="reel-wrapper">
            <div className="reel-header">
                <p className="reel-header-info">{fonts.length} of {response.length} families</p>
                <Tooltip sx={{ color:"#000",'&:hover': { backgroundColor: 'rgb(230,230,230)' } }} title='Search results are based on font and font designer names which most closely match your query, and are ranked using the following factors: (1) web usage of the font family; (2) trend in web usage of the font family; (3) the number of styles in the font family; (4) the date the font family was added to Google Fonts; and/or (5) how applicable the font family is to the dominant language(s) in your country (based on your location and settings). The relative weight given to each factor is determined by the sorting method you choose—for example, the date the font family was added to Google Fonts will play a bigger role if you choose to sort by "Newest".' placement="bottom">
                    <Button className="about-btn">About these results <RiErrorWarningLine className="warning-icon"/></Button>
                </Tooltip>
            </div>
            <div className="fonts-reel">
                {
                    fonts.slice(0,100).map((font: any, index: number) => {
                        return <Link to={`/${font.family}`} key={index}>
                            <div className="font-reel-wrapper">
                              <div className="font-reel-header">
                                <p className="font-title">{font.family}</p>
                                <p className="font-count">{font.variants.length} styles</p>
                              </div>
                              <p style={{ fontSize: "46px", fontFamily: `${font.family + ' regular'}` }}>
                               {example}
                              </p>
                            </div>
                          </Link>                        
                      })                      
                }
            </div>
        </div>
      </Container>
  )
}

export default Reel