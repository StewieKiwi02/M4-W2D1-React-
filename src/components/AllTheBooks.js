import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import booksData from '../data/books.json';

function AllTheBooks() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-4">
      <h5 className="text-center">Griglia dei Libri</h5>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Cerca un libro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>

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
