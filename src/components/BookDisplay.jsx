import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';


const BookDisplay = ({ bookList }) => {


  return (
    // <ul>
    //   {bookList.map(item => (
    //     <li key={item._id}>
    //       <a href={item.url}>{item.title}</a>
    //     </li>
    //   ))}
    // </ul>
    <div>
      
    </div>
  )
}


// class BookDisplay extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       books: [],
//     }

//     // binds
//   }

//   componentDidMount() {
//     axios.get('/books')
//       .then(res => console.log('res: ',res))
//       .then((books) => {
//         console.log('books received: ', books);
//         if (!Array.isArray(books)) books = [];
//         return this.setState({
//           books: books,
//         });
//       });
//   }

//   render() {
//     // make local var for props
//     const { books } = this.state;
//     // edge case for nothing returned
//     if (!books) return null;
//     // edge case for empty tasklist
//     if (!books.length) return (
//       <div>Sorry, no tasks found</div>
//     );
    
//     return (
//       <div>
//         {books}
//       </div>
//     )
//   }
// }

export default BookDisplay;