import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import Product from "../components/Product/Product.js";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

function Homepage() {
  const [product, setProduct] = useState([]);
  const {} = useParams;

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('https://charming-ray-flannel-nightgown.cyclic.app/api/products');
        setProduct(data.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
    //didn't work without the above () to call a function, but... why...?
  }, []);

  console.log('products', product);

  return (
    <div id="home">
      <div className="homeTop">
        <h1>FABLE OF KLASSIK</h1>
      </div>
      <div className="secondLevel">
        <h2>JACKETS KLS</h2>
      </div>
      <div className="homeProducts">

        {product.map((item) => (
          //need to pass this item as props
            <Link to={`/item/${item._id}`}>
          <Product data={item} key={item._id} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Homepage;
