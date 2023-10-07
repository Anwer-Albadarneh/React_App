

import data from './data.json';
import Cardcomp from './card';
import './main.css';
import { useState } from 'react';

function Main (){
    let [items, setItems] = useState(data)

    function handleSubmit(event){
       
        let searchedValue = event.target.search.value;

        let filteredItem = data.filter(function(Item){return  Item.title.toLowerCase().includes(searchedValue.toLowerCase() )})
        setItems(filteredItem); 
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search"/>

            <button type='submit'>Search</button>
        </form>
        <div id='container'>
        {items.map(function(Item){
            return(
                <Cardcomp image={Item.image_url} title={Item.title} description={Item.description} price={Item.price}/>

            )
        }    
    )
        } 
        </div>
         </>
    )
}
export default Main;