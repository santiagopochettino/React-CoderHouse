import ItemCount from '../components/ItemCount/ItemCount'
import { useState } from 'react';


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


        </div>)
};



export default ItemListContainer;
