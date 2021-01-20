import React from 'react'
import '../App.css'
import Main from '../components/Main'
import Navbar from '../components/Navbar'


export default function Home() {
    return (
        <div className="home">
            <div className="max-width">
                <Navbar />
                <h1>Restaurants nearby</h1>
                <Main />
            </div>
        </div>
    )
}
