import "../styles/ViewItem.css";
import Foto from "../assets/Foto1.png";

function ViewItem() {
  return (
    <div> 
      <div className="productTag">
        <div><h2>Fable of Klassik</h2></div> <div><h2>—</h2></div> <div><h2>Jacket</h2></div>
      </div>
      <div className="viewItemPage">
        <div className="singleProductImage">
          <img src={Foto} alt="single product" />
        </div>
        <div className="singleProductInfo">
          <div>
            <h1 className="singleProductHeading">Jacket KLS</h1>
            <h2 className="singleProductPrice">€105</h2>
          </div>

          <div>
            <button className="singleProductButton">Add to Cart</button>
            <h4 className="singleProductDescriptionHeading">Product Info</h4>
            <p className="singleProductDescription">
              Jacket made of a loose fit makes the product a universal element
              of the upper layer. Two patch pockets and one hidden pocket.
              Branded lining with FABLE pattern. Shoulder pads of medium
              rigidity for shaping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
