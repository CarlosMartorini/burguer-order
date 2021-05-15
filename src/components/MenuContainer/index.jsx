import { Component } from "react";
import Product from "../Product";
import './styles.css';

class MenuContainer extends Component {

    render() {
        const { listProducts, buttonClick } = this.props;
        return(
            <>
            <div className='itens'>
            {
                listProducts.map((product) => (
                    <Product key={product.id} 
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        buttonClick2={buttonClick}
                        product={product}
                    />
                ))
            }     
            </div>
            </>
        )
    }
}

export default MenuContainer;