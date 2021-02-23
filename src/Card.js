
import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles';


export default function Card({ singleProduct }) {

    return (
        <div>
            <p>Product: {singleProduct.name}</p>
            <p>Price: {singleProduct.price}</p>
            <p>Currency: {singleProduct.currency}</p>
            <p>Category: {singleProduct.category}</p>
            <p>Package-Size: {singleProduct.size}</p>
            <p>Support Contact: {singleProduct.support}</p>
            <p>Product Tags: {singleProduct.tags}</p>
            <p>On Sale: {singleProduct.onSale === true ? 'on Sale' : 'not on Sale'}</p>
        </div>
    )
}