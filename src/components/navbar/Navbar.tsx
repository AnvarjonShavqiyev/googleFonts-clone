import './Navbar.scss'
import { Container } from '../../utils/Utils'
import icon from '../../assets/icon.svg'
import { TfiSearch } from "react-icons/tfi";
import Dropdown from '../dropdown/Dropdown';
import Bag from '../../assets/bag.svg'
import { MdOutlineTune } from "react-icons/md";
import { useParams } from 'react-router-dom';

interface NavProps {
  search: String,
  setSearch: React.Dispatch<React.SetStateAction<String>>,
}

const Navbar: React.FC<NavProps> = ({search, setSearch}) => {
  const {name} = useParams()
  return (
    <Container>
      <div className='navbar'>
        <div className='navbar-wrapper'>
          <img src={icon} alt="" />
          <div className='nav-search-wrapper'>
            <TfiSearch className='search-icon'/>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} value={search} className='search-input' type="text" placeholder='Search fonts' />
            <div className='dropdown-wrapper'>
              <Dropdown/>
            </div>
          </div>
            <button className='bag-btn'><img className='bag-icon' src={Bag} alt="" /></button>
        </div>
        {
        !name && <button className='filter-btn'><MdOutlineTune/>Filters</button>
        }
      </div>
    </Container>
  )
}

export default Navbar