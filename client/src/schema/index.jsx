import * as Yup from 'yup';


export const registrationSchema = Yup.object({
    userName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Username can only contain alphabetical characters.')
        .min(4, 'Username must be at least 4 characters long.')
        .max(15, 'Username cannot be longer than 15 characters.')
        .required('Username is required.'),
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format.')
        .required('Email is required.'),

    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long.')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
            'Password must contain at least one number and one special character.')
        .required('Password is required.'),

    confirmPassword: Yup.string().required('Confirm password is required.').oneOf([Yup.ref('password'), null], "Password must match.")


})


export const loginSchmea = Yup.object({
    userName: Yup.string()
        .matches(/^[a-zA-Z]+$/, 'Username can only contain alphabetical characters.')
        .min(4, 'Username must be at least 4 characters long.')
        .max(15, 'Username cannot be longer than 15 characters.')
        .required('Username is required.'),


    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long.')
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/,
            'Password must contain at least one number and one special character.')
        .required('Password is required.'),



})