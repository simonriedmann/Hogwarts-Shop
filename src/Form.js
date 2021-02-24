
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';
import Tag from './Tag'

export default function Form({ submitFunction }) {

    const initialProduct = {
        name: '',
        price: '',
        currency: '',
        size: '',
        support: '',
        tags: [],
        onSale: false
    }

    const [product, setProduct] = useState(initialProduct)

    console.log(product)

    const eventHandler = (event) => {
        const field = event.target; //source of the event
        const value =
            field.type === 'checkbox' ? field.checked : field.value;

        setProduct({
            ...product,
            [field.name]: value
        })
    }

    const validProductName = (name) => name.length >= 2;
    const validEmailAddress = (mail) => mail.includes('@')
    const validPrice = (price) => {
        if(price.includes(',')){
            const[_,decimals] = price.split(',')
            if (decimals.length === 2)
            return true
        }
        else if (price) {return true}
        else {return false}
    }


    function submitForm(event) {
        event.preventDefault()
        if (validProductName(product.name && validEmailAddress && validPrice(product.price))){
        submitFunction(product)
        setProduct(initialProduct)
        }
        else {alert('form wrong')}
    }

    const setTags = (tag) => {
        setProduct({
            ...product, tags: [...product.tags, tag]
        })
    }

    const deleteTag = (tagToDelete) => {
        const allRemainingTags = product.tags.filter((tag) => (tag !== tagToDelete))
        setProduct({
            ...product,
            tags: [allRemainingTags]
        })
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
          <input type="text" name="price" onChange={eventHandler} value={product.price} />
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
            <Tag createTag={setTags} tags={product.tags} onDeleteTag={deleteTag}/>


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
