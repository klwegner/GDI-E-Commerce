import "../styles/ViewItem.css";
import Foto from "../assets/Foto1.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewItem() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false); //when products load, setLoading = false (see api call)

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(
          `https://charming-ray-flannel-nightgown.cyclic.app/api/products/${id}`
        );
        setProduct(data.data.data);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <div>
      {loading ? (
        <div>
          <div>
            <h2>Fable of Klassik</h2>
          </div>{" "}
          <div>
            <h2>—</h2>
          </div>{" "}
          <div>
            <h2>Jacket</h2>
          </div>
          <div className="viewItemPage">
            <div className="singleProductImage">
              <img
                src={product.image ? product.image[0] : ""}
                alt="single product"
              />
            </div>
            <div className="singleProductInfo">
              <h1 className="singleProductHeading">{product.name}</h1>
              <h2 className="singleProductPrice">${product.price}</h2>
              <button className="singleProductButton">Add to cart</button>

              <div>
                <h4 className="singleProductDescriptionHeading">
                  Product Info
                </h4>
                <p className="singleProductDescription">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );

  //     <div>
  //  <div className="productTag">
  //         <div><h2>Fable of Klassik</h2></div> <div><h2>—</h2></div> <div><h2>Jacket</h2></div>
  //       </div>
  //       <div className="viewItemPage">
  //         <div className="singleProductImage">
  //         {/* code below makes system hold the image load until it is defined/loads */}
  //           <img src={product.image === undefined ?'' : product.image[0]} alt="single product" />
  //         </div>
  //         <div className="singleProductInfo">
  //           <div>
  //             <h1 className="singleProductHeading">{product.name}</h1>
  //             <h2 className="singleProductPrice">€{product.price}</h2>
  //           </div>

  //           <div>
  //             <button className="singleProductButton">Add to Cart</button>
  //             <h4 className="singleProductDescriptionHeading">Product Info</h4>
  //             <p className="singleProductDescription">
  //               {product.desc}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //       )}

  //     </div>
}

export default ViewItem;
