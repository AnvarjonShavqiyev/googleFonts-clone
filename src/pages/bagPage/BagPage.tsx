import { Container } from "../../utils/Utils"
import fontsLogo from '../../assets/icon.svg'
import { Link } from "react-router-dom"
import Bag from '../../assets/bag.svg'
import './BagPage.scss'
import { useSelector } from "react-redux"
const BagPage = () => {
    const data = useSelector((state:any) => state.bagRoot.fonts);
    console.log(data);
    return (
    <Container>
        <div className="bag-page-nav">
            <img src={fontsLogo} alt="" />
            <Link to='/bag' className='bag-btn'><img className='bag-icon' src={Bag} alt="" /></Link>
        </div>
        {
            data.length > 0 ?
            <div className="bag-page-wrapper">
                <p className="selected-count">
                    {data.length} font {data.length > 1 ? "families" : "family"} selected
                </p>
                <div className="selected-fonts-wrapper">
                    <div className="selected-fonts">
                        {
                            data.map((font:any) => {
                                return <div>
                                    <p>{font.fontName}</p>
                                    <p style={{fontFamily:`${font.fontName+'regular'}`}}>Everyone has the right to freedom of thought, conscience and</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div> :
            <div className="empty-page">
                <div className="empty-page-wrapper">
                <p className="sticker">\(^Д^)/</p>
                <p className="empty-page-note">You don't have any fonts yet. <br/> 
Choose a font to get started.</p>
                <Link className="link-empty-page" to='/'>Browse fonts</Link>
                </div>
            </div>
        }
    </Container>
  )
}

export default BagPage