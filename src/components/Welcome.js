import React from "react";
import {Alert, Container} from "react-bootstrap";

function MyAlert(){

    return (

        <Container className="my-4">

            <h4 className="text-center">
                CIAOOOOOO!!!!
            </h4>

            <Alert variant="success">
                Questo è un avviso importante!!
            </Alert>

        </Container>
    )
}

export default MyAlert;