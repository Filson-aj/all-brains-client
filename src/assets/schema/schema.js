import * as yup from 'yup';

//login form schema definition
export const signinSchema = yup.object().shape({
    email: yup.string().email().required('Your email address is required'),
    password: yup.string().min(8).max(32).required(),
});

export const signupSchema = yup.object().shape({//scheme for signup form
    email: yup.string().email().required('Please provide your email address'),
    password: yup.string().min(8).max(32).required('Please enter your password'),
    confirmpassword: yup.string().min(8).max(32).required('Please confirm your password')
        .oneOf([yup.ref('password'), null], 'Password mismatch. Please make sure your password match'),
    firstname: yup.string().required('Please provide your first name'),
    surname: yup.string().required('Please provide your surname'),
    phone: yup.string().required('Please provide your phone number'),
    address: yup.string().required('Please enter your address'),
});

export const schoolSchema = yup.object().shape({//schema for school data
    code: yup.string().min(2).max(3).required(`Please enter school's code name`),
    name: yup.string().required(`Please enter school's name`),
});

export const departmentSchema = yup.object().shape({//schema for department data
    code: yup.string().min(2).max(3).required(`Please enter department's code name`),
    name: yup.string().required(`Please enter department's name`),
    schoolid: yup.string().required(`Please enter department's school`),
});

export const programmeSchema = yup.object().shape({//schema for programme data
    code: yup.string().min(2).max(8).required(`Please enter programme's code name`),
    name: yup.string().required(`Please enter programme's name`),
    duration: yup.string().required(`Please enter programme's duration`),
});

export const courseSchema = yup.object().shape({//schema for courses data
    code: yup.string().min(2).max(8).required(`Please enter course's code`),
    title: yup.string().required(`Please enter course's title`),
    level: yup.string().required(`Please enter course's level`),
    semester: yup.string().required(`Please enter course's semester`),
    unit: yup.number().min(1).max(12).required(`Please enter course's unit`),
    departmentid: yup.string().required(`Please enter course's department`),
    programmeid: yup.string().required(`Please enter course's programme`),
});

export const staffSchema = yup.object().shape({//schema for staff data
    staffid: yup.string().required(`Please enter staff's id`),
    firstname: yup.string().required(`Please enter staff's firstname`),
    surname: yup.string().required(`Please enter staff's surname`),
    dob: yup.date().required(`Please enter staff's date of birth`),
    gender: yup.string().min(1).max(12).required(`Please enter staff's gender`),
    qualification: yup.string().required(`Please enter staff's qualification`),
    phone: yup.string().required(`Please enter staff's phone number`),
    address: yup.string().required(`Please enter staff's address`),
    email: yup.string().email().required('Please provide your email address'),
    schoolid: yup.string().required(`Please enter staff's schoolid`),
    departmentid: yup.string().required(`Please enter staff's departmentid`),
});