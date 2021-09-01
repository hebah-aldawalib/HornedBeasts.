import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {



    return (

      <div>
          
        <Modal show={this.props.visible} onHide={this.props.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
            <Button className="close" onClick={this.props.handleClose}>
             
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: "100%" }} bg="dark" text="light">
              <Card.Img
                variant="top"
                src={this.props.selected.image_url  }
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>{this.props.selected.title}</Card.Title>
                <Card.Text>{this.props.selected.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}

export default SelectedBeast;