import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})


const FormikForm = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values,{ resetForm }) => {
          console.log('✅ Form submitted:', values)
          alert(`Form submitted successfully!\n\n${JSON.stringify(values, null, 2)}`);
          resetForm(); 
    }}
  >
     {({ isSubmitting }) => (
      <Form>
        <label htmlFor="name">Username</label>
        <Field type="text" id="username" name="username" placeholder="Enter your name" />
        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" placeholder="Enter your email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" placeholder="Enter your password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}</button>
      </Form>
        )}
    </Formik>
)
    
export default FormikForm