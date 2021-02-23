
import { useState } from 'react';

import styled from 'styled-components';

import GlobalStyle from './GlobalStyles';

function App() {
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    currency: '',
    size: '',
    support: '',
    tags: '',
    onSale: false


  })

  const eventHandler = (event) => {
    const field = event.target; //source of the event
    const value = 
    field.type === 'checkbox' ? field.checked : field.value;

    setProduct({
      ...product, 
      [field.name]: value
    })}

  return (
    <div className="App">
      <h1>New Product</h1>
      <section>
        <label>Product Name
          <input type="text" name="name" onChange={eventHandler} value={product.name}/>
        </label>
      </section>
      <PriceBox>
        <label> Price
          <input type="number" name="price" onChange={eventHandler} value={product.price}/>
        </label>
        <label> Currency
          <input type="text" name="currency" onChange={eventHandler} value={product.currency}/>
        </label>
      </PriceBox>
      <section>
        <select name="category" onChange={eventHandler} value={product.category}>
          <option value='broomstick'>Broomstick</option>
          <option value='beer'>Beer</option>
          <option value='books'>Books</option>
        </select>
      </section>
      <section>
        <input type="radio" name="size" value="S" onChange={eventHandler} checked={product.size === 'S'}/>S
        <input type="radio" name="size" value="M" onChange={eventHandler} checked={product.size === 'M'}/>M
        <input type="radio" name="size" value="L" onChange={eventHandler} checked={product.size === 'L'}/>L
      </section>
      <section>
        <label> Support Contact(E-Mail)
          <input type="text" name="support" onChange={eventHandler} value={product.support}/>
        </label>
      </section>
      <section>
        <label>Product Tags
          <input type="text" name="tags" onChange={eventHandler} value={product.tags}/>
        </label>
      </section>
      <section>
        <input type="checkbox" name="onSale" onChange={eventHandler} value={product.onSale} checked={product.onSale}/>On Sale
      </section>
      <section>
        <button>Add</button>
        <button>Cancel  </button>
      </section>
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Currency: {product.currency}</p>
      <p>Category: {product.category}</p>
      <p>Package-Size: {product.size}</p>
      <p>Support Contact: {product.support}</p>
      <p>Product Tags: {product.tags}</p>
      <p>On Sale: {product.onSale === true ? 'on Sale' : 'not on Sale'}</p>
    </div>
  );
}


const PriceBox = styled.section`
  display: flex;
  flex-direction: row;

`

export default App;
