import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>About</Link>
        <Link to={'/'}>Contact</Link>

        <h2 onClick={() => navigate('/')}>MetaBrass</h2>

        <Link to={'/'}>Galaxies</Link>
        <Link to={'/'}>Solar System</Link>
        <Link to={'/'}>Earth</Link>
        <h2 className="mobile-menu" onClick={() => navigate('/')}>Menu</h2>
    </div>
  )
}

export default Navbar