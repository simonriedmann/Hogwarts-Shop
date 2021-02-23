
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';

export default function Form({ submitFunction }) {

    const initialProduct = {
        name: '',
        price: '',
        currency: '',
        size: '',
        support: '',
        tags: '',
        onSale: false
    }

    const [product, setProduct] = useState(initialProduct)

    const eventHandler = (event) => {
        const field = event.target; //source of the event
        const value =
            field.type === 'checkbox' ? field.checked : field.value;

        setProduct({
            ...product,
            [field.name]: value
        })
    }

    function submitForm(event) {
        event.preventDefault()
        submitFunction(product)
        setProduct(initialProduct)
    }

    return (
        <form onSubmit={submitForm}>
            <h1>New Product</h1>
            <section>
                <label>Product Name
          <input type="text" name="name" onChange={eventHandler} value={product.name} />
                </label>
            </section>
            <PriceBox>
                <label> Price
          <input type="number" name="price" onChange={eventHandler} value={product.price} />
                </label>
                <label> Currency
          <input type="text" name="currency" onChange={eventHandler} value={product.currency} />
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
                <input type="radio" name="size" value="S" onChange={eventHandler} checked={product.size === 'S'} />S
        <input type="radio" name="size" value="M" onChange={eventHandler} checked={product.size === 'M'} />M
        <input type="radio" name="size" value="L" onChange={eventHandler} checked={product.size === 'L'} />L
      </section>
            <section>
                <label> Support Contact(E-Mail)
          <input type="text" name="support" onChange={eventHandler} value={product.support} />
                </label>
            </section>
            <section>
                <label>Product Tags
          <input type="text" name="tags" onChange={eventHandler} value={product.tags} />
                </label>
            </section>
            <section>
                <input type="checkbox" name="onSale" onChange={eventHandler} value={product.onSale} checked={product.onSale} />On Sale
      </section>
            <section>
                <button>Add</button>
                <button>Cancel</button>
            </section>
        </form>

    )
}



const PriceBox = styled.section`
  display: flex;
  flex-direction: row;

`
