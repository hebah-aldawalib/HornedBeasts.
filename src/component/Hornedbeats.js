import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// import Modal from 'react-bootstrap/Modal'


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        like : 0
    }
}

incrementNumberOfPets = () => {
  this.setState({
      like : this.state.like + 1  


  })
  this.props.viewModal(this.props.title)
}


  render() {   
    return (
     
<Card style={{ width: '18rem' , display:'inline-block' }} >
  <Card.Img variant="top" src={this.props.image_url} onClick={this.incrementNumberOfPets} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    ❤️ =  {this.state.like} 
    </Card.Text>
    <Card.Text>
    {this.props.description}
    </Card.Text> 
    <button onClick={this.incrementNumberOfPets}   >click</button>
  </Card.Body>
</Card>  
      
    )
  }
}
export default HornedBeasts;