
import React from "react";
import './../styles/App.css';
import {useState} from 'react'
const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDelete = index => {
    setItems([...items.slice(0, index), ...items.slice(index + 1)]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul >
        {items.map((item, index) => (
          
          <li key={index} style={{listStyleType:'none'}}>
            {item}
            <button style={{marginLeft:'15rem'}}onClick={() => handleDelete(index)}>Delete</button>
          
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App
