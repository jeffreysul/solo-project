import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import BookForm from './BookForm.jsx';

const Dashboard = ({ setBookList }) => {
  return (
    <div>
      <label htmlFor='Dashboard'>Your Dashboard</label>
      <hr></hr>
      <div>
        <label htmlFor='Profile'>Jeffrey Sul</label>
      </div>
      <BookForm setBookList={setBookList} />
    </div>
  );
};

export default Dashboard;