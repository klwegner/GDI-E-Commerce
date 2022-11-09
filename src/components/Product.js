import Foto2 from '../assets/Foto2.png';
import '../styles/Product.css';

function Product(props) {
    return(
        <div className="oneProduct">
        <div className="productPic">
            <img src={props.data.img} alt="Foto1"/> 
            {/* will use img from productData */}
        </div>
        <div className="productInfo">
            <p>{props.data.name}</p>
            {/* will use name from productData */}
            <h4>{props.data.price}</h4>
            {/* will use price from productData */}
        </div>
        </div>
    )
}

export default Product;