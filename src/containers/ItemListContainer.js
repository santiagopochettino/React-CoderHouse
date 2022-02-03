import ItemCount from '../components/ItemCount/ItemCount'
import { useState } from 'react';
import ItemList from '../components/ItemList/ItemList'


const ItemListContainer = () => {
    const initial = 1;
    const stock = 15;

    const [items, setItems] = useState(initial);



    const onAdd = () => {
        if (items < stock) {
            setItems(items + 1)
        }
    }

    return (
        <div>

            <ItemCount stock={stock} items={items} onAdd={onAdd} />
            <ItemList />

        </div>)
};



export default ItemListContainer;
