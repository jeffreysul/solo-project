import React, { useState } from 'react';
import axios from 'axios';



const BookForm = ({ setBookList }) => {
  const [book, setBook] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/books', { title: book })
      .then(res => {
        // console.log('POST res: ', res);
        // console.log('POST res.data: ', res.data);
        setBookList(res.data);
      })
    setBook('');
  }
  const handleChange = (e) => {
    setBook(e.target.value);
  }

  return (
    <div>
         <form onSubmit={handleSubmit}>
           <label>
             Book Title:
          <input type='text' value={book} onChange={handleChange} />
           </label>
        <button type='submit' value='submit'>Add Book</button>
      </form>  
    </div>
  )
}

export default BookForm;