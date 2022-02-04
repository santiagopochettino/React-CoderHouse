import ItemCount from '../components/ItemCount/ItemCount'
import { useState } from 'react';
import ItemList from '../components/ItemList/ItemList'


const ItemListContainer = () => {
    const [onAdd, setOnAdd] = useState()


    return (
        <div>

            <ItemCount onAdd={onAdd} b={setOnAdd} stock='10' />
            <ItemList />

        </div>)
};



export default ItemListContainer;
