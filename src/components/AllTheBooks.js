import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useTheme } from "./ThemeContext";

function AllTheBooks({ searchTerm, booksData }) {
  const { theme } = useTheme();
  const [books, setBooks] = useState([]);

  // Questo useEffect si esegue solo quando booksData cambia
  useEffect(() => {
    if (booksData) {
      setBooks(booksData); // Aggiorna lo stato solo se booksData cambia
    }
  }, [booksData]); // Dipendenza corretta: booksData

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className={`my-4 bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
      <h5 className="text-center">Griglia dei Libri</h5>

      <Row>
        {filteredBooks.map((book) => (
          <Col md={4} key={book.ASIN} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
