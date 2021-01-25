import React from 'react'

export default function Order() {
    return (
        <div className="order">
            <div className="basket">
                <div className="basket-container">
                    <h3>Order Summary</h3>
                    <p>Basket Contents</p>
                    <p className="contents">
                        Example <i class="fas fa-shopping-basket"></i>
                    </p>
                </div>
            </div>

            <div className="summary">
                <form className="order-form">
                    <h3>Payment</h3>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label  for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label for="address1">Address line 1:</label><br/>
                    <input type="text" id="address1" name="address1" placeholder="Address Line 1"/><br/>
                    <label for="address2">Address line 2:</label><br/>
                    <input type="text" id="address2" name="address2" placeholder="Address Line 2"/><br/>
                    <label for="address3">Address line 3:</label><br/>
                    <input type="text" id="address3" name="address3" placeholder="Address Line 3"/><br/>
                    <label for="address4">City:</label><br/>
                    <input type="text" id="address4" name="address4" placeholder="City"/><br/>
                    <label for="address5">Post Code:</label><br/>
                    <input type="text" id="address5" name="address5" placeholder="Post Code"/><br/>
                    <input type="submit" value="Payement" />
                </form>
            </div>
        </div>
    )
}
