
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Cardcomp(props){
  const [show, setShow] = useState(false);

  function handleshow(){
    
  setShow(!show)
  }
return(
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {props.image}/>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Button variant="primary" onClick={handleshow}>Show Details </Button>
    </Card.Body>
  </Card>
        <Modal show={show} onHide={handleshow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description} <br /> <b><h4>{props.price}$</h4></b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleshow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

)

}
export default Cardcomp;

