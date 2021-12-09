import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
{
  products.map(product=> <Product name={product.name} price={product.price} ></Product>)
}

    </div>
    
  );
  
}

function Product(props){
  const productStyle ={
    border:'5px solid blue',
    borderRadius:'10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price:{props.price}</h4>
    </div>
  )
}


// const products = [
//   { name: 'mobile', price: 15000 },
//   { name: 'camera', price: 15000 },
//   { name: 'laptop', price: 15000 },
//   { name: 'watch', price: 15000 },
//   { name: 'shoe', price: 15000 },
 
// ]

// <Product name="mobile" price ="15000"></Product>
// <Product name="laptop" price ="150000"></Product>
// <Product name="camera" price ="55000"></Product>
// <Product name="ram" price ="5000"></Product>
// <Product name="Mac" price ="1500000"></Product>

export default App;
