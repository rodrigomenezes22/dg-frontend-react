import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from "./Components/Header";
import Home from "./Components/Home";


function App() {

const [booksArray, setBooksArray ] = useState([])
const [currentBook, setCurrentBook ] = useState({})


useEffect(() => {
  fetch("http://localhost:3000/js/books.json")
  .then((response) => {
   return response.json();
  })
  .then((data) => { 
    console.log(data);
    setBooksArray(data.books);
  })
  .catch((error) => console.log(error));
}, [])

const handleBook = (isbn) => {
  const filteredBooks = booksArray.filter((book)=> book.isbn === isbn)
  const booksContent = document.querySelector(".books-content");
  const booksNavigation = document.querySelector(".books-navigation");
  booksContent.classList.add("active");
  booksNavigation.classList.add("hide");
  setCurrentBook(filteredBooks[0]);
}

const handleBack = () => {
  const booksContent = document.querySelector(".books-content");
  const booksNavigation = document.querySelector(".books-navigation");
  booksContent.classList.remove("active");
  booksNavigation.classList.remove("hide");
}


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home booksArray={booksArray} handleBook={handleBook} currentBook={currentBook} handleBack={handleBack}  />} />
      </Routes>

    </div>
  );
}

export default App;
