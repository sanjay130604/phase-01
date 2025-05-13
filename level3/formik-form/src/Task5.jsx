import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

function Task5() {
  const [submittedData, setSubmittedData] = useState("");

  return (
    <Formik
      initialValues={{
        users: [{ id: 1, name: "", email: "", age: "" }],
      }}
      validationSchema={Yup.object({
        users: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string()
                .min(3, "Name must be at least 3 characters")
                .required("Name is required"),
              email: Yup.string()
                .email("Invalid email format")
                .required("Email is required"),
              age: Yup.number()
                .typeError("Age must be a number")
                .min(18, "Must be at least 18 years old")
                .max(100, "Age cannot be over 100")
                .required("Age is required"),
            })
          )
          .min(1, "At least one user is required"), // Ensures at least one user exists
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("Submitted Data:", values);
        setSubmittedData(values);
        alert("Form submitted successfully!"); 
        resetForm(); // Clear form after submission
      }}
    >
      {({ values }) => (
        <Form>
          <h2>Complex Dynamic Form</h2>

          <FieldArray name="users">
            {({ push, remove }) => (
              <div>
                {values.users.map((user, index) => (
                  <div key={user.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                    
                    {/* Name Field */}
                    <Field name={`users[${index}].name`} placeholder="Enter Name" />
                    <ErrorMessage name={`users[${index}].name`} component="div" style={{ color: "red", fontSize: "14px" }} />

                    {/* Email Field */}
                    <Field name={`users[${index}].email`} placeholder="Enter Email" />
                    <ErrorMessage name={`users[${index}].email`} component="div" style={{ color: "red", fontSize: "14px" }} />

                    {/* Age Field */}
                    <Field name={`users[${index}].age`} placeholder="Enter Age" type="number" />
                    <ErrorMessage name={`users[${index}].age`} component="div" style={{ color: "red", fontSize: "14px" }} />

                    {/* Remove Button */}
                    {values.users.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        style={{ marginLeft: "10px", background: "red", color: "white", border: "none", cursor: "pointer", padding: "5px 10px" }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                {/* Add User Button */}
                <button
                  type="button"
                  onClick={() => push({ id: Date.now(), name: "", email: "", age: "" })}
                  style={{ background: "green", color: "white", border: "none", cursor: "pointer", padding: "5px 10px", marginTop: "10px" }}
                >
                  Add User
                </button>
              </div>
            )}
          </FieldArray>

          {/* Submit Button */}
          <button type="submit" style={{ marginTop: "10px", padding: "8px 15px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
            Submit
          </button>

          {/* Display Submitted Data */}
          {submittedData && (
            <div style={{ marginTop: "20px", padding: "10px", background: "#f4f4f4", borderRadius: "5px" }}>
              <h3>Submitted Data:</h3>
              <pre>{JSON.stringify(submittedData)}</pre>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
export default Task5;