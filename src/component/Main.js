import React from 'react';
import HornedBeasts from './Hornedbeats';
import data from './Hornedbeast.json';
// import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';




class Main extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      filterBeast: data,

    }
  }

  test = (event) => {

    event.preventDefault();

    if (event.target.value === '1') {
      this.setState({
        filterBeast: data.filter((beast) => beast.horns === 1
        )
      })
    }

    if (event.target.value === '2') {
      this.setState({
        filterBeast: data.filter((beast) => beast.horns === 2
        )
      })
    }

    if (event.target.value === '3') {
      this.setState({
        filterBeast: data.filter((beast) => beast.horns === 3
        )
      })
    }


    if (event.target.value === '100') {
      this.setState({
        filterBeast: data.filter((beast) => beast.horns === 100
        )
      })
      
    }


    if (event.target.value === '0') {
      this.setState({
        filterBeast: data,
      })
    }
    console.log(event.target.value);
  }


  render() {
    return (
      <main>
        <Form.Select onChange={this.test}>
        
          <option value="0">all</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="100">100</option>
        </Form.Select>

        {
          this.state.filterBeast.map((allthink) => {
            return (
              <HornedBeasts
                image_url={allthink.image_url}
                title={allthink.title}
                description={allthink.description}
                keyword={allthink.keyword}
                horns={allthink.horns}
                renderModel={this.props.renderModel}
                handleClose={this.props.handleClose}
                viewModal={this.props.viewModal}
              // displayModal2={this.props.showModel }
              />
            )
          })
        }


      </main>
    )
  }
}
export default Main;