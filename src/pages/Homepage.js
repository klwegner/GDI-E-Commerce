import "../styles/Home.css";
import Product from "../components/Product/Product.js";
import {ProductData} from '../utils/ProductData';

function Homepage() {
    return(
        <div id="home">
        <div className="homeTop">
        <h1>FABLE OF KLASSIK</h1>
        </div>
        <div className="secondLevel">
        <h2>JACKETS KLS</h2>
        </div>
        <div className="homeProducts">
              {/* <Product />
              <Product />
              <Product /> */}
        {ProductData.map((item) =>
            <Product data={item} key={item.id}/>
        )
        }
        
        </div>
        </div>
    )
}
export default Homepage;