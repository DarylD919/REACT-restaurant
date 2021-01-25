import '../App.css'
import Navbar from '../components/Navbar'
import Pay from '../components/Pay'


export default function Go() {
    return (
        <div className="go">
            <div className="max-width">
                <Navbar />
                <h1>Shipping</h1>
                <Pay />
            </div>
        </div>
    )
}
