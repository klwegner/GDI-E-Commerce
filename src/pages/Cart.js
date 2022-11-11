
import Form from "../components/Form/Form";
import OrderCard from "../components/OrderCard/OrderCard";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import '../styles/Cart.css';

function Cart() {
  return (
    <div id="cartPage">
      <div className="leftForm">
        <div>
          <Form />
        </div>
      </div>
      <div className="rightOrderSummary">
        <div>
          <OrderCard />
        </div>
      </div>
    </div>
  );
}

export default Cart;
