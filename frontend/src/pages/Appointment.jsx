import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'react-phone-input-2/lib/style.css';
import { toast, ToastContainer } from 'react-toastify';
import { appointmentFormValidation } from '../validation/FormValidation';
import { baseURL } from '../assets/API/API.js';

const Appointment = () => {
    // const [phone, setPhone] = useState('');
    const handleAppointmentSubmit = (values, { resetForm }) => {
        const token = localStorage.getItem("token");
        // values.contact_number = phone;
        axios.post(`${baseURL}/appoinment/book`, values, {
            headers: {
                Authorization:`Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then((res) => {
                console.log("Form Submitted:", res.data);
                toast.success("Booked!");
                resetForm();
            })
            .catch((err) => {
                console.error("Error:", err);
                toast.error("Something went wrong!");
            });
    };
    return (
        <div className='appointment-container'>
            <ToastContainer />
            <h2>Book an Appointment</h2>
            {/* appointment form with validation */}
            <Formik
                initialValues={{
                    patient_name: "",
                    patient_age: "",
                    address: "",
                    contact_number: "",
                    date: "",
                    medical_speciality: "",
                    select_doc: "",
                    purpose: "",
                }}
                validationSchema={appointmentFormValidation}
                onSubmit={handleAppointmentSubmit}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form className='appointment-form'>
                        <h4>Patient Details</h4>

                        <Row className="mb-3">
                            <Col>
                                <label><strong>Patient Name</strong></label>
                                <Field name="patient_name" className="form-control" placeholder="Patient Name" />
                                <ErrorMessage name="patient_name" component="div" className="text-danger" />
                            </Col>

                            <Col>
                                <label><strong>Patient Age</strong></label>
                                <Field
                                    name="patient_age"
                                    type="number"
                                    className="form-control"
                                    placeholder="Age"
                                    onInput={(e) => {
                                        if (e.target.value.length > 2) {
                                            e.target.value = e.target.value.slice(0, 2);
                                        }
                                    }}
                                />
                                <ErrorMessage name="patient_age" component="div" className="text-danger" />
                            </Col>
                        </Row>

                        <div className="mb-3">
                            <label><strong>Address</strong></label>
                            <Field name="address" className="form-control" placeholder="Patient Address" />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </div>

                        <Row className="mb-3">
                            <Col>
                                <label><strong>Contact Number</strong></label>
                                <Field type="text" name="contact_number" className="form-control" placeholder="+91----------" maxLength={10} />
                                <ErrorMessage name="contact_number" component="div" className="text-danger" />
                            </Col>

                            <Col>
                                <label><strong>Date</strong></label>
                                <Field type="date" name="date" className="form-control" />
                                <ErrorMessage name="date" component="div" className="text-danger" />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <label><strong>Medical Specialty</strong></label>
                                <Field as="select" name="medical_speciality" className="form-select">
                                    <option value="">Choose Speciality</option>
                                    <option value="Orthopedic">Orthopedic</option>
                                    <option value="Neurologists">Neurologists</option>
                                    <option value="Cardiologists">Cardiologists</option>
                                </Field>
                                <ErrorMessage name="medical_speciality" component="div" className="text-danger" />
                            </Col>

                            <Col>
                                <label><strong>Select Doctor</strong></label>
                                <Field as="select" name="select_doc" className="form-select">
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. Bose">Dr. Bose</option>
                                </Field>
                                <ErrorMessage name="select_doc" component="div" className="text-danger" />
                            </Col>
                        </Row>

                        <div className="mb-3">
                            <label><strong>Purpose</strong></label>
                            <Field name="purpose" className="form-control" placeholder="Mention your purpose" />
                            <ErrorMessage name="purpose" component="div" className="text-danger" />
                        </div>

                        <Button variant="primary" type="submit" style={{ width: "100%", height: "50px" }}>
                            Book Appointment
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Appointment