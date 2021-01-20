import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/img-10.jpg'
import image2 from '../images/img-11.jpg'
import image3 from '../images/img-12.jpg'
import image4 from '../images/img-13.jpg'
import image5 from '../images/img-14.jpg'
import image6 from '../images/img-15.jpg'

export default function Card() {
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
                        <img src={image3} alt="bake" className="img-src" />
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
                        <img src={image4} alt="bake" className="img-src" />
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
                        <img src={image5} alt="bake" className="img-src" />
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
                        <img src={image6} alt="bake" className="img-src" />
                        <div className="card-title"><h3>Mc Donald's</h3></div>
                        <div className="card-content">
                            <p>Fast Food Chain Restaurant</p>
                        </div>
                    </div>
                </Link>            
            </div>  
        </div>
    )
}
