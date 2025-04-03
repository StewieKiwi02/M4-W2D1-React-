import React from "react";
import { useState } from "react";

function NotFound() {

    const [plus, setPlus] = useState(0);

    function handleClick() {

        if(handleClick){

            setPlus(plus + 1);

        }else if (plus === 0){

            plus = 0;

        }else{

            setInterval(() => {

                setPlus(plus - 1);
            }, 3000);
        }
    }


    <>

    <h2>Pagina non trovata...</h2>
    <p>il tuo punteggio è: {plus}</p>
    


    <button onClick={handleClick}>Cliccami</button>

    </>


}


export default NotFound