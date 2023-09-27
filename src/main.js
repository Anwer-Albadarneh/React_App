

import data from './data.json';
import Cardcomp from './card';
import './main.css';

function Main (){
    return(
        <>
        <div id='container'>
        {data.map(function(Item){
            return(
                <Cardcomp image={Item.image_url} title={Item.title} description={Item.description} />

            )
        }    
    )
        } 
        </div>
         </>
    )
}
export default Main;