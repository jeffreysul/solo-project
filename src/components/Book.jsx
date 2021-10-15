import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';


const Book = ({ id, title, setBookList }) => {
  
  console.log('id: ', id);
  const handleClick = (e) => {
    console.log('key: ', id);
    axios.delete(`/books/${id}`)
      .then(res => {
        setBookList(res.data);
    })
  }

  return (
    <div >
      <h3>{title}</h3>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Book;