import './OrderSummary.css'

function OrderSummary() {
    return(
        <div>
        <div>
            <div>
                <h1>Summary:</h1>
                <h1>340</h1>
            </div>
            <div>
            <h1>Delivery:</h1>
            <h1>0</h1>
            </div>
            <div>
                <h1>Promo code:</h1>
                <h1>0</h1>
            </div>
            <div>
                <h1>Total:</h1>
                <h1>340</h1>
            </div>
    
        </div>
        <div>
            <input className="promoCodeInput" placeholder="enter promo code"/>
            <button className="apply">Apply</button>
        </div>

        </div>
    )
}

export default OrderSummary;