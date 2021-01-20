import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../src/images/img-5.jpg'
import image2 from '../../src/images/img-6.jpg'
import image3 from '../../src/images/img-7.jpg'
import image4 from '../../src/images/img-9.jpg'

export default function Main() {
    return (
        <div className="selection">
            <div className="card">
                <Link to="/get" className="card-link">
                    <div className="card-container">
                        <img src={image1} alt="bake" className="img-src" />
                        <div className="card-title"><h3>Mc Donald's</h3></div>
                        <div className="card-content">
                            <p>Fast Food Chain Restaurant</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/get" className="card-link">
                    <div className="card-container">
                        <img src={image2} alt="bake" className="img-src" />
                        <div className="card-title"><h3>Papa John's</h3></div>
                        <div className="card-content">
                            <p>Fast Food Chain Restaurant</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card">
                <Link to="/get" className="card-link">
                    <div className="card-container">
                        <img src={image3} alt="bake" className="img-src" />
                        <div className="card-title"><h3>KFC</h3></div>
                        <div className="card-content">
                            <p>Fast Food Chain Restaurant</p>
                        </div>
                    </div>
                </Link>
            </div>          
            <div className="card">
                <Link to="/get" className="card-link">
                    <div className="card-container">
                        <img src={image4} alt="bake" className="img-src" />
                        <div className="card-title"><h3>Dominos</h3></div>
                        <div className="card-content">
                            <p>Fast Food Chain Restaurant</p>
                        </div>
                    </div>
                </Link>
            </div>           
        </div>
    )
}
