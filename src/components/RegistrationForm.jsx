import React from 'react';
import { Formik, useFormik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registrationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().positive().integer().max(100).required(),
  email: yup.string().email().required(),
  phone:  yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .length(12)
    .required('A phone number is required'),
  // .positive("A phone number can't start with a minus")
  // .integer("A phone number can't include a decimal point")
  // .min(12).max(12)
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();

  })
});

export default function RegistrationForm() {


  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: 0,
          email: '',
          phone: '',
          website: '',
          createdOn: new Date().toLocaleString(),
}}
        validationSchema={registrationSchema}
        validateOnBlur
        onSubmit={e => console.log('submit', e)}>
        {(...args) => (
          <Form>
            {console.log('args', args)}
            <div className="form">
              <div className="form-item ">
                <Field name="firstName" />
                <label className="label" htmlFor='firstName'>Your first name</label>
                <ErrorMessage name="firstName" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="lastName" />
                <label className="label" htmlFor='lastName'>Your last name</label>
                <ErrorMessage name="lastName" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="age" />
                <label className="label" htmlFor='age'>Your age</label>
                <ErrorMessage name="age" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="email" />
                <label className="label" htmlFor='email'>Your email</label>
                <ErrorMessage name="email" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="phone" />
                <label className="label" htmlFor='phone'>Your phone</label>
                <ErrorMessage name="phone" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="website" />
                <label className="label" htmlFor='website'>Your website</label>
                <ErrorMessage name="website" className="errormessage" component='span'/>
              </div>
              <div className="form-item ">
                <Field name="createdOn" />
                <label className="label" htmlFor='createdOn'>Created on date</label>
                <ErrorMessage name="createdOn" className="errormessage" component='span'/>
              </div>
              <button type="submit" className='btn'>Submit</button>
            </div>
          </Form>
        )}

      </Formik>
    </>
  )
}
