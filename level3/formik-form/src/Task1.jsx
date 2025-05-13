import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";

const BasicForm = () => {
  return (
    <Formik
    // it is starting values and using validationschema 
      initialValues={
        { name: "",
           email : "" ,
            password : "",
          }}
        validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email("invalid").required('requried'),
        password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character")
    .required("Password is required"),
      })}
    //   it is for print in console and reset
      onSubmit={(values, { setSubmitting,resetForm }) => {
        console.log("Form Data:", values);
        // resetForm();
        setTimeout(()=>{
          setSubmitting(false);
        resetForm();
        },1000);
        // it is use when you sumbit 1 wait and reset 
        
      }}
    >
        {/* it is for print the statement or tag  */}
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text"  name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
          <br />
          <label htmlFor="email">Email:</label>
          <Field type="email"  name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          <br />
          <label htmlFor="password">Password:</label>
          <Field type="password"  name="password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          <br />
          <button type="submit" disabled={isSubmitting}>
            {/* when button is click  form function is run */}
            {/* {isSubmitting ? "submitting" : "submit"} */}
            submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BasicForm;
