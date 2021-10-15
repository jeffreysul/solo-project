import React, { Component, useState, useEffect } from 'react';
import Book from './Book';

const BookDisplay = ({ bookList, setBookList }) => {

  console.log('item: ', { ...bookList[0] }.id);

  return (
    <div>
      {bookList.map(item => {
        const newItem = { ...item };
        console.log('newItem.id: ', newItem.id);
        return <Book id={newItem.id} title={item.title} setBookList={setBookList} />
      })}
    </div>
  )
}

export default BookDisplay;