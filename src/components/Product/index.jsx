import { Component } from "react";
import './styles.css';
import { FaCartPlus } from 'react-icons/fa'

class Product extends Component {
    render() {
        const {category, name, price, buttonClick2, product} = this.props;
        return(
            <div className='product'>
                <h3>{name}</h3>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <button className='cart' onClick={() => buttonClick2(product.id)} ><FaCartPlus/></button>
            </div>
        )
    }
}

export default Product;