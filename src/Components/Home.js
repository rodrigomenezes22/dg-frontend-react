import React from 'react'
import Book from "../models/Book";

function Home({booksArray , handleBook, currentBook, handleBack}) {

  const book = new Book(currentBook);
  console.log("whaaaaaaat", book);

  const formatBook = (isbn) => {
    const formattedNumber = `${isbn.slice(0, 3)}-${isbn.slice(
      3,
      4
    )}-${isbn.slice(4, 9)}-${isbn.slice(9, 12)}-${isbn.slice(12)}`;
    return formattedNumber;
  } 

  let arrow = ">"

  const handleMore = (e) => {

    const booksList = document.getElementById("book-list");
    booksList.classList.toggle("maxHeight");
  
  
    if (e.target.innerHTML === "show more...") {
      e.target.innerHTML = "show less...";
    } else {
      e.target.innerHTML = "show more...";
    }
  
  }

  const arrowBack = "<"


  return (
    <main>
      <section className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 bg-lightgray books-navigation">
            <ul id="book-list" className="maxHeight">
              {booksArray &&

                booksArray.map((book) => <li className='book-item' onClick={()=>handleBook(book.isbn)} key={book.isbn}>{formatBook(book.isbn)} <span></span>{arrow}</li>)

              }
            </ul>
            <div className="show-nav">
              <button className="show me-4" onClick={handleMore}>show more...</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9 books-content">
            <div id="book-info">
              <div className="container">
                <div className="row justify-content-center">
                  <a href="#" onClick={handleBack} className="back-button" alt="Go Back">{arrowBack} back </a>
                  <div className="col-8 col-md-6 col-lg-4 col-xl-3 p-lg-5 mt-3 text-center">
                    <img
                      id="cover-image"
                      src={book?.checkIsbn === "Invalid isbn!" ? `./images/default.jpg` : `./images/${currentBook?.isbn}.jpg`}
                      alt={currentBook?.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-8 col-xl-9 p-4 mt-lg-5">
                    <h2 id="book-title">{currentBook?.title}</h2>
                    <p id="book-isbn" className={book?.checkIsbn === "Invalid isbn!" ? "color-red" : ""} >{book?.checkIsbn}</p>
                    <p id="book-appendix">{book?.convertAppendixPage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
