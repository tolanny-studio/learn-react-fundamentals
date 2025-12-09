import React from 'react'
import ReactDOM from 'react-dom/client'

import '../css/index.css'
import { books } from './books'
import Book from './Book'

export const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section>
      <h1>Amazon Best Sellers</h1>
      <div className="book-list">
        {books.map((book, index) => {
          // const{id,bookImage,bookTitle,bookAuthor} = book

          return (
            // <Book key={id} bookImage={bookImage} bookTitle={bookTitle} bookAuthor={bookAuthor}/>
            <Book key={book.id} {...book} getBook={getBook} index={index} />
          )
        })}
      </div>
    </section>
  )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<BookList />)
