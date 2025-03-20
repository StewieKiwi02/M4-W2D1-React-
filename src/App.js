import './App.css';
import MyNavBar from './components/MyNav.js';
import MyFooter from './components/MyFooter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyAlert from './components/Welcome.js';
import AllTheBooks from './components/AllTheBooks.js';
import SingleBook from './components/SingleBook.js';

function App() {

  const book = {
    title: "il signore degli anelli",
    cover: "https://www.ibs.it/images/9788830119000_0_0_536_0_75.jpg",
  };

  return (
    <div>
      <MyAlert />
      <MyNavBar />
      <div className="d-flex flex-column align-items-center">
        <h1>Il libro</h1>
        <SingleBook book={book} />
      </div>
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
