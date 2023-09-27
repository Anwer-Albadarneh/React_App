

import data from './data.json';
import Cardcomp from './card';

function Main (){
    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-between", gap:"20px", marginTop:"3%"}}>
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