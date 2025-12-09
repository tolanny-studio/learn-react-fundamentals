const Book =  ({ bookImage, bookTitle, bookAuthor, getBook, id,index }) => {
  const titleStyle = {
    fontSize: '18px',
  }
  return (
    <article className="book">
      <p className='book-index'>{index + 1}</p>
      <img src={bookImage} />
      <h3 style={titleStyle}>{bookTitle}</h3>
      <button onClick={() => getBook(id)}>Buy</button>
      <h5>
        by: <span style={{ color: '#17756dff' }}>{bookAuthor}</span>
      </h5>
    </article>
  )
}

export default Book