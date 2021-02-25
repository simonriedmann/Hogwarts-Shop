import { useState } from 'react'
import styled from 'styled-components';


export default function Tag({ createTag, tags, onDeleteTag }) {
    const [value, setValue] = useState('')

    const handleChange = (event) => setValue(event.target.value);

    
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            createTag(value)
            setValue('')
        }
    }

    return (    
        <section>
            <label>Product Tags</label>
            <Wrapper>
            {tags.map((tag, index) => (<span key={index}>{tag}<i onClick={() =>
            onDeleteTag(tag)}>&times;</i></span>))}
            <input type="text" name="tags" onChange={handleChange} onKeyDown={onKeyDown} value={value} />
            
            </Wrapper>
        </section>
    )

}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 20%;
  border: solid 1px black;`