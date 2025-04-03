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
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import BookDetails from './components/BookDetails.jsx';


function App() {

  const [searchTerm, setSearchTerm] = useState("");

  const book = {
    ASIN: 0,
    title: "il signore degli anelli",
    cover: "https://www.ibs.it/images/9788830119000_0_0_536_0_75.jpg",
  };

  return (
    <BrowserRouter>
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

        <Routes>
          <Route path="/" element={<AllTheBooks />} /> {/* con la ROUTE passo l'URL per il componente AllTheBooks*/}
          <Route path="*" element={<NotFound />} /> {/* con la ROUTE passo l'URL per il componente NotFound, se non esiste URL selezionato*/}
          <Route path="/BookDetails/:ASIN" element={<BookDetails />} />
        </Routes>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
