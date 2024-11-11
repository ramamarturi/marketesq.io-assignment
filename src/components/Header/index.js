import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <div>
      <Link to="/" className="link-item">
        <h1 className="logo-heading">Brisphere</h1>
      </Link>
    </div>
    <ul className="list-item-container">
      <Link to="/Discover" className="link-item">
        <li className="list-item">Discover</li>
      </Link>
      <Link to="/services" className="link-item">
        <li className="list-item">Services</li>
      </Link>
      <Link to="/about" className="link-item">
        <li className="list-item">About Us</li>
      </Link>
    </ul>
  </div>
)

export default Header
