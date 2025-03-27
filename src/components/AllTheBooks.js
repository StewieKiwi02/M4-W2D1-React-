import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { useTheme } from "./ThemeContext"; // Importiamo il tema

function AllTheBooks({ searchTerm, booksData }) {
  const { theme } = useTheme(); // Otteniamo il tema
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, [booksData]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className={`my-4 bg-${theme} text-${theme === "light" ? "dark" : "light"}`}>
      <h5 className="text-center">Griglia dei Libri</h5>

      <Row>
        {filteredBooks.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
