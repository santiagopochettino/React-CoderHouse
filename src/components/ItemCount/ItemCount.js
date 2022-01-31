import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ItemCount.css'

const ItemCount = (props) => {
    const [counter, setCounter] = useState(0);

    const handlerCounterUp = () => {
        setCounter(counter == props.stock ? counter + 0 : counter + 1);
    }
    const handlerCounterDown = () => {
        setCounter(counter === 0 ? counter + 0 : counter - 1);
    }
    const onAdd = () => {
        alert("Agregaste " + counter + " items al carrito!")
    }
    return (

        <div className='counterSection'>

            <Stack spacing={2} >
                <h3>Contador: {counter}</h3>
                <h3>Stock : {props.stock}</h3>

                <Button onClick={handlerCounterUp} variant="contained">Increase</Button>
                <Button onClick={handlerCounterDown} variant="contained">Decrease</Button>
                <Button onClick={onAdd} variant="contained">Send</Button>
            </Stack>

        </div>)
};

export default ItemCount;

// Me  quede en la hora 1:41 de la clase 5
