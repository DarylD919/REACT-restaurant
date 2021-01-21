import '../App.css'
import Navbar from '../components/Navbar'
import Order from '../components/Order'


export default function Set() {
    return (
        <div className="set">
            <div className="max-width">
                <Navbar />
                <h1>Review Order</h1>
                <Order />
            </div>
        </div>
    )
}
