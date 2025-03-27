import './App.css';
import MyNavBar from './components/MyNav.js';
import MyFooter from './components/MyFooter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAlert from './components/Welcome.js';
import AllTheBooks from './components/AllTheBooks.js';
import { ThemeProvider } from "./components/ThemeContext";
import SingleBook from './components/SingleBook.js';
import booksData from './data/books.json';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const book = {
    title: "il signore degli anelli",
    cover: "https://www.ibs.it/images/9788830119000_0_0_536_0_75.jpg",
  };

  return (
    <ThemeProvider>
      <div>
        <MyAlert />
        <MyNavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="d-flex flex-column align-items-center">
          <h1>Il libro</h1>
          <SingleBook book={book} />
        </div>
        <AllTheBooks searchTerm={searchTerm} booksData={booksData} />
        <MyFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
