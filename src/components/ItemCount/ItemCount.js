import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ItemCount.css'

const ItemCount = () => {
    return (

        <div className='counterSection'>

            <Stack spacing={2} >

                <Button variant="contained">Incremetar</Button>
                <Button variant="contained">Decrementar</Button>
            </Stack>
        </div>)
};

export default ItemCount;
