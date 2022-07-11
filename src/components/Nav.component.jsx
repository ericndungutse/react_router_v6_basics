import {NavLink} from 'react-router-dom'

const Nav = ()=>{
    return(
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact</NavLink>
        </nav>
    )
}

export default Nav