import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import booksData from '../data/books.json';



function BookDetails() {

    const [book, setBook] = useState(null); {/* serve per tenere traccia del libro scelto*/}
    const {ASIN} = useParams();

    useEffect(() => {

        const bookFound = booksData.find(book => book.ASIN === ASIN);

        console.log("Dati dei libri:", booksData);

        if(bookFound){

            setBook(bookFound)
        }else{

            console.log("libro non trovato");
            setBook(null);
        }


    }, [ASIN]);





    if (!book) {
        return <p>Loading...</p>;
    }

    {/* controllo per il parametro ASIN se viene passato */}  


    return (

        <>

        <Container>

            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.price}€</p>

        </Container>

        </>


    );

}


export default BookDetails