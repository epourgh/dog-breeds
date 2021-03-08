import React from 'react'
import { Link } from "react-router-dom";

const NavComponent = () => {
    return (
        <div>
            <Link to="/">first page</Link> / 
            <Link to="/2">second page</Link>
        </div>
    )
}

export default NavComponent
