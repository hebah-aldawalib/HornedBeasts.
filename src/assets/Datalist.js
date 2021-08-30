import React from 'react';
import Data from './assets/Data.json';
import HornedBeasts  from '.Hornedbeats';

class Datalist extends React.Component{

 render(){
     return(

        <div>
            {Data.map((datadetail)=> {
                return <div> <h3>{datadetail.title}</h3>
                <p>{datadetail.description}</p>
                <img src={datadetail.image_url}/>
                </div>
            })}



        </div>
     )
 }
}
export default Datalist;