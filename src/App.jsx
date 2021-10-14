import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import Dashboard from './components/Dashboard.jsx';
import BookDisplay from './components/BookDisplay.jsx';
import axios from 'axios';

const App = () => {
  // pass booklist to bookdisplay
  // pass setter to dashboard -> bookform
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios.get('/books')
      .then(res => setBookList(res.data));
  }, []);

  return (
    <div>
      <h1>Book Tracker</h1>
      <h3>My name is Jeff</h3>
      <div>
        <Dashboard setBookList={setBookList}/>
      </div>
      <hr></hr>
      <div>
        <BookDisplay bookList={bookList}/>
      </div>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));