
import './Navbar.css'
import navlogo from '../Assets/1.png'
import navprofileIcon from '../Assets/3.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={navlogo} className='' alt="" />
      </div>
      <div>
        <img src={navprofileIcon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
