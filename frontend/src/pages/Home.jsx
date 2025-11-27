import '../App.css';
import doctor1 from '../assets/doctor1.png';
import doctor2 from '../assets/doctor2.png';
import doctor3 from '../assets/doctor3.png';
import doctor4 from '../assets/doctor4.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdVerifiedUser } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            {/* section 1 */}
            <div className='home-section1'>
                <img src={doctor1} alt='doctor1' />
                <div className='home-section1-section'>
                    <p>Your Life Is<br />Our Responsibility</p>
                    <div className='home-btn-section'>
                        <Link to="/appointment" className='btn-link'>
                            <Button type='button' variant='primary'>Book Appointment</Button>
                        </Link>
                        <Link to="/doctors" className='btn-link'>
                            <Button type='button' variant='outline-primary'>Find a Doctor</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div className='home-section2'>
                <div className='home-section2-section'>
                    <TfiHeadphoneAlt className='section-icons' />
                    <label>24x7 Support</label>
                </div>
                <div className='home-section2-section'>
                    <MdVerifiedUser className='section-icons' />
                    <label>Certified Doctors</label>
                </div>
                <div className='home-section2-section'>
                    <TbBrandBooking className='section-icons' />
                    <label>Online Booking</label>
                </div>
            </div>
            {/* section 3 */}
            <Container className='home-section3'>
                <h2>Our Hospitality Partners</h2>
                {/* row-1 */}
                <Row>
                    {/* doc-1 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor1} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-2 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor1} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-3 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor2} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-4 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor1} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* row-2 */}
                <Row>
                    {/* doc-5 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor3} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-6 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor1} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-7 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor4} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* doc-8 */}
                    <Col sm>
                        <Card style={{
                            width: 'auto',
                            display: "flex",
                            alignItems: "center", justifyContent: "center", border: "none"
                        }}>
                            <Card.Img variant="top" src={doctor2} className='card-img' />
                            <Card.Body>
                                <Card.Title>Dr. Smriti Gupta</Card.Title>
                                <Card.Text>Heart Specialist</Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home