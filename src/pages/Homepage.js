import "../styles/Home.css";
import Product from "../components/Product";
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
        {ProductData.map((item, index) => (
            <Product data={item}/>
        ))
        }
        
        </div>
        </div>
    )
}
export default Homepage;