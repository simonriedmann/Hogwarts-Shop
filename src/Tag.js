import { useState } from 'react'


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

            <label>Product Tags
            <input type="text" name="tags" onChange={handleChange} onKeyDown={onKeyDown} value={value} />
            </label>
            {tags.map((tag, index) => (<span key={index}>{tag}<i onClick={() =>
            onDeleteTag(tag)}>&times;</i></span>))}
        </section>
    )

}