import './Filter.scss'
import { MdOutlineClose } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
interface FilterProps {
  setExample: React.Dispatch<React.SetStateAction<String>>,
  setFontSize: React.Dispatch<React.SetStateAction<String>>,
  fontSize:Number
}
const Filter:React.FC<FilterProps> = ({setExample, fontSize, setFontSize}) => {
  return (
    <div className='filter-wrapper'>
        <div className="filter-header">
            <button className='reset-btn'><GrPowerReset/> Reset all</button>
            <button className='bag-btn'><MdOutlineClose/></button>
        </div>
        <div className='priview-text'>
          <p style={{fontSize:"20px",marginBottom:"10px"}}>Priview</p>
          <textarea onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => setExample(e.target.value.length > 0 ? e.target.value :" Everyone has the right to freedom of thought, conscience and")} placeholder='Type something' className='priview-text-area' cols="30" rows="10"></textarea>
        </div>
        <div className="slider-container">
          <p style={{fontSize:"18px", width:"40px"}}>{fontSize}</p>
          <input value={fontSize} type="range" min="8" max="280" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFontSize(e.target.value)} className="slider" id="mySlider"/>
        </div>
    </div>
  )
}

export default Filter