import {Button,Modal,Form} from 'react-bootstrap'
import {useState} from 'react'


function AddMovie(props) {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        Title:"",
        Description:"",
        Rating:"",
        Url:"",
        Posterurl:""
    });
   
    const handleClose = () => setShow(false);
    
    
    const handleSave = () =>{
        props.handleAddMovie(newMovie)
        handleClose()
    }
    const handleShow = () => setShow(true);
    const handleChange = (e)=>setNewMovie({...newMovie,[e.target.name]:e.target.value})

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add new Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="Title"
                  placeholder="Title"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="Description"
                  placeholder="Description"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="text"
                  name="Rating"
                  placeholder="Rating"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  name="Url"
                  placeholder="Url"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Posterurl</Form.Label>
                <Form.Control
                  type="text"
                  name="Posterurl"
                  placeholder="Posterurl"
                  autoFocus
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddMovie;