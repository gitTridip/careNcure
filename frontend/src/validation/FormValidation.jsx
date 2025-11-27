import * as Yup from 'yup';

export const appointmentFormValidation = Yup.object().shape({
    patient_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Patient name is required'),
    patient_age: Yup.number()
        .min(1, 'Invalid age')
        .max(99, 'Invalid age')
        .required('Age is required'),
    address: Yup.string().required('Address is required'),
    contact_number: Yup.string()
        .matches(/^[0-9]{10}$/, 'Contact number must be 10 digits')
        .required('Contact number is required'),
    date: Yup.date().required('Date is required'),
    medical_speciality: Yup.string().required('Speciality is required'),
    select_doc: Yup.string().required('Doctor selection is required'),
    purpose: Yup.string().required('Purpose is required'),
});


export const RegisterFormValidation = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(1, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Last name is required'),
    email: Yup.string()
        .email('Email must be correct')
        .required('Email id is required'),
    mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
        .required('Mobile number is required'),
    password: Yup.string()
    .min(8, 'Password length must be 8')
    .max(9, 'Password length must be 8')
    .required("Password is required"),
    // confirmPassword: Yup.string()
    // .min(8, 'Password length must match')
    // .max(9, 'Password length must match')
    // .required("Re-enter password"),
    address: Yup.string().required('Address is required'),
});

export const LoginFormValidation = Yup.object().shape({
    login: Yup.string()
        .email('Email must be correct')
        .required('Email id is required'),
    password: Yup.string()
    .min(8, 'Password length must be 8')
    .max(9, 'Password length must be 8')
    .required("Password is required"),
});
