import React, { useState } from 'react';

import { Button, Stack } from '@mui/material';
import './ItemCount.css'

const ItemCount = ({ stock }) => {
    const [counter, setCounter] = useState(0);

    const handlerCounterUp = () => {
        setCounter(counter == stock ? counter + 0 : counter + 1);
    }
    const handlerCounterDown = () => {
        setCounter(counter === 0 ? counter + 0 : counter - 1);
    }
    const onAdd = () => {
        onAdd(counter);


    }
    return (

        <div className='counterSection'>

            <Stack spacing={2} >
                <h3>Contador: {counter}</h3>
                <h3>Stock : {stock}</h3>

                <Button onClick={handlerCounterUp} variant="contained">Increase</Button>
                <Button onClick={handlerCounterDown} variant="contained">Decrease</Button>
                <Button onClick={onAdd} variant="contained">Add Cart</Button>
            </Stack>

        </div>)
};

export default ItemCount;

