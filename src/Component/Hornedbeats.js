import React from 'react';


class HornedBeasts extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
          favorat: 0
         
        }
      }
    
      increaseNumberOfFavorat = () => {
    //    console.log();
        this.setState({
            favorat: this.state.favorat + 1
        });
    
      
    
      }


    render(){
       
        return(
          
            <div>
            <h1>{this.props.title}</h1>
            <p>A unicorn and a narwhal nuzzling their horns</p>
            <p>number of favorat {this.state.favorat}</p>
            <img style={{ backgroundColor:'pink',width:'700px' , height:'700px' , display:'inline-block'}} src={this.props.imageUrl} alt={this.props.title}/>
            <button onClick={this.increaseNumberOfFavorat}> I favorat images</button>
            </div>

        )
    }
}
export default HornedBeasts;

