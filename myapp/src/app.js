import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>To Do List App</h1>
      <h3>Created by Jeffrey Sul</h3>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));