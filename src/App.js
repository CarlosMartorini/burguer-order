import { Component } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import { FaRegTimesCircle, FaSearch } from 'react-icons/fa';


class App extends Component {

  state = {
    products: [
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ],
    filteredProducts: [],
    currentSale: { total: 0.00, saleDetails: [] },
  }

  resetProducts = () => {
    this.setState({products: [
      { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
      { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
      { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
      { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
      { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
      { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
      { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
    ]})
    console.log(this.state.products)
  }

  showProducts = () => {
    const { products, filteredProducts } = this.state;
    const filteredProduct = products.filter((product) => product.name.toLowerCase() === filteredProducts[0].toLowerCase())
    this.setState({products: filteredProduct});
  }

  handleClick = (productId) => {
    const { products, currentSale } = this.state;
    const { total, saleDetails } = currentSale;
    
    const findProduct = products.find((product) => product.id === productId) 
    
    if (saleDetails.includes(findProduct) === false) {

      this.setState({currentSale: {total: total + findProduct.price, 
          saleDetails: [...saleDetails, findProduct]
        }
      });

    }

  }

  render() {
    const { products, filteredProducts, currentSale } = this.state; 
    const { total, saleDetails } = currentSale;
      return (
        <div className="App">
          <div className='search-container'>

            <input className='input-search' value={filteredProducts}
              onChange={(e) => this.setState({filteredProducts: [e.target.value]})}
              placeholder='Search...'
              />

            <button className='search-button' onClick={this.showProducts}>
              <FaSearch/>
            </button>

            <button className='clear-button' onClick={this.resetProducts}><FaRegTimesCircle/></button>

          </div>

          <div className='menu'>

            <MenuContainer className='menu' 
              listProducts={products}
              buttonClick={this.handleClick}
            />

          </div>


          <h3 style={{margin:'40px', textAlign:'left'}}>Subtotal: $ {Number(total).toFixed(2)}</h3>

          <div className='cart-container'>

            {
              saleDetails.map((product, index) => (
                  <div className='card-cart'>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p>$ {product.price}</p>
                  </div>
              ))
            }

          </div>
      </div>
    );
  }
}

export default App;
