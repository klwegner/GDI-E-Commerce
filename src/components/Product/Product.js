// import Foto2 from '../assets/Foto2.png';
import './Product.css';

function Product(props) {
    //could also do function Product({data}) {
    return(
        <div className="oneProduct">
        <div className="productPic">
            <img src={props.data.image[0]} alt="Foto1"/> 
            {/* could also use data.image[0] if use of line 5 */}
            {/* will use img from axios req */}
        </div>
        <div className="productInfo">
            <p>{props.data.name}</p>
            {/* will use name from axios req */}
            <h4>${props.data.price}</h4>
            {/* will use price from axios req */}
        </div>
        </div>
    )
}

export default Product;