import '../styles/navbar.css';
import fallout from '../assets/fallout.png'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className="navbar">
			<img src={fallout} />
      <NavLink to="/" className="active-link">
        Home
      </NavLink>
			<h1>Hub Store</h1>
      <NavLink to="/store" className="active-link">
        Store
      </NavLink>

			<img src={fallout} />
		</div>
	)
}
