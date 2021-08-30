import React from 'react';
import HornedBeasts from './Hornedbeats';
import Data from '../assets/Data.json';

class Main extends React.Component {

    render() {

        return (
            <>

                <div style={{ backgroundColor: 'pink ', width:'700px' , height:'700px' , display:'inline-block'}}>
                    {Data.map((datadetail) => {
                    return (<HornedBeasts title={datadetail.title} imageUrl={datadetail.image_url} description={datadetail.description} />)

                })}
                </div>

            </>
        )
    }
}
export default Main;
