import React, { useState } from 'react'
import { GrSearchAdvanced } from "react-icons/gr";
import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';
import doctor4 from '../assets/doctor4.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

const Doctors = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className='doctors-container'>
            {/* header */}
            <div className='doctors-header-section'>
                <h1>Our Doctors</h1>
                <div className='doctors-search-container'>
                    <input type='search' id='search-input' placeholder='Search here...' />
                    <GrSearchAdvanced style={{
                        height: "20px",
                        width: "50px",
                    }} />
                </div>
            </div>

            {/* doctor list */}
            <Container className='doctors-list-section'>
                {/* row-1 */}
                <Row className='docotors-list-row'>
                    {/* doc-1 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor1} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-2 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor1} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-3 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor2} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-4 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor1} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* row-2 */}
                <Row>
                    {/* doc-5 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor3} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-6 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor1} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-7 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor4} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-8 */}
                    <Col className='docotors-list-col'>
                        <Card className='doctors-card'>
                            <Card.Img variant="top" src={doctor2} className='doctors-card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                <Button style={{width:"100%"}} variant="primary" onClick={handleShow}>View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* modal */}
            <Modal show={show} onHide={handleClose} className='modal'>
                <Modal.Header closeButton className='modal-header' />
                <Modal.Body className='modal-body'>
                    <div className="modal-img">
                        <img src={doctor1} alt='modal-img1' />
                    </div>
                    <div className='modal-text'>
                        <h4 className='modal-text-heading'>Dr. Smriti Gupta</h4>
                        <h5 className='modal-text-subheading'>Cardiologist</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer style={{ border: "none" }}>
                    <Button style={{width:"100%"}} variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default Doctors
