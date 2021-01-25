import React from 'react'

export default function Order() {
    return (
        <div className="order">

            <div className="summary">
                <form className="order-form">
                    <h3>Payment</h3>
                    <label for="fname">Name on card:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="card">Payement Type:</label><br/>
                    <select id="card" name="card-type">
                        <option value="visa-debit">Visa Debit</option>
                        <option value="visa-credit">Visa Credit</option>
                        <option value="credit">Credit Card</option>
                        <option value="apple">Apple Pay</option>
                    </select> <br/>
                    <label for="lname">Card Number:</label><br/>
                    <input type="text" id="cnum" name="cnum" placeholder="xxxx/xxxx/xxxx/xxxx"/><br/>
                    <label for="lname">CVV:</label><br/>
                    <input type="text-cvv" id="cvv" name="cvv" placeholder="CVV"/><br/>
                    <label for="ename">Expires:</label><br/>
                    <input type="date" id="expires" name="expires"/><br/>
                    <input type="submit" value="Payement" />
                </form>
            </div>
        </div>
    )
}
