
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import { v4 as uuidv4 } from 'uuid'
import Card from './Card'
import Tag from './Tag'

import Form from './Form'

function App() {

  const [products, setProducts] = useState([])
  const addProduct = ((product) => setProducts([...products, { ...product, id: uuidv4() }]))

  return (
    <div className="App">
      <Form submitFunction={addProduct} />
      {
        products.map((singleProduct) => (
          <Card singleProduct={singleProduct} />
        ))
      }

    </div>
  );


}


const PriceBox = styled.section`
  display: flex;
  flex-direction: row;

`

export default App;
