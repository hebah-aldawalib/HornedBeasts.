import React from 'react';
import HornedBeasts from './Hornedbeats';
import data from './Hornedbeast.json';
// import Row from 'react-bootstrap/Row';





class Main extends React.Component {

  render() {
    return (
      <main>
      

          {
           data.map((allthink) => {
              return (
                <HornedBeasts
                image_url={allthink.image_url}
                  title={allthink.title}
                  description={allthink.description}
                  keyword={allthink.keyword}
                  horns={allthink.horns}
                  renderModel={this.props.renderModel }
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