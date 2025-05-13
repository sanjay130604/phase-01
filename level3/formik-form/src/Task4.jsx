import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function DynamicUserForm() {
  return (
    <Formik
      initialValues={{
        users: [{ id: 1, name: "" }],
      }}
      validationSchema={Yup.object({
        users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Required"),
          })
        ),
      })}
      onSubmit={(values) => {
        console.log("Form Data:", values);
      }}
    >
      {({ values }) => (
        <Form>
          <h2>Dynamic User List</h2>

          <FieldArray name="users">
            {({ push, remove }) => (
              <div>
                {values.users.map((user, index) => (
                  <div key={user.id} style={{ marginBottom: "10px" }}>
                    <Field
                      name={`users[${index}].name`}
                      placeholder="Enter name"
                    />
                    <ErrorMessage
                      name={`users[${index}].name`}
                      component="div"
                      style={{ color: "red", fontSize: "14px" }}
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      style={{
                        marginLeft: "10px",
                        background: "red",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => push({ id: Date.now(), name: "" })}
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    padding: "5px 10px",
                    marginTop: "10px",
                  }}
                >
                  Add User
                </button>
              </div>
            )}
          </FieldArray>

          <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}
