import '../App.css'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


export default function Get() {
    return (
        <div className="get">
            <div className="max-width">
                <Navbar />
                <h1>View Selection</h1>
                <Card />
            </div>
        </div>
    )
}
