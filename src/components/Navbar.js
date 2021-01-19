import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <div className="navbar">
        <div className="max-width">
            <div className="nav-menu">
                <div className="brand">H2GO</div>
                <ul>
                    <li>
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                    <li>
                        <Link to="/get" className="nav-item">Get</Link>
                    </li>
                    <li>
                        <Link to="/set" className="nav-item">Set</Link>
                    </li>
                    <li>
                        <Link to="/go" className="nav-item">Go</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-item">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}
