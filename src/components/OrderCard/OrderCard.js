import Foto1 from '../../assets/Foto1.png';
import './OrderCard.css';
import OrderSummary from '../OrderSummary/OrderSummary';

function OrderCard() {
    return(
        <>
        <div className="orderCard">
        <div className="orderCardPic">
<img src={Foto1} alt="product"/>
        </div>
      <div className="rightSideOrderCard">
        <div className="orderCardInfo">
            <h1>Jacket KLS</h1>
            <h2>Collection: KLASSIK OF FABLE</h2>
            <h2>Article: H0522001</h2>
        </div>
        <div className="orderCardQuantityInfo">
            <h1>Size:</h1>
            <h1>Color:</h1>
            <h1>Quantity:</h1>
        </div>
<h1>Price: </h1>
        </div>
        </div>
        <OrderSummary/>
        </>
    )
}

export default OrderCard;