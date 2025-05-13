import React, { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FilterableUserForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  return (
    <Formik
      initialValues={{
        users: [
          { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
          { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
          { id: 3, name: "Charlie", email: "charlie@example.com", age: 22 },
        ],
      }}
      validationSchema={Yup.object({
        users: Yup.array().of(
          Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            age: Yup.number().min(18, "Must be at least 18").required("Age is required"),
          })
        ),
      })}
      onSubmit={(values) => {
        alert("Form submitted successfully!");
        console.log("Submitted Data:", values);
      }}
    >
      {({ values }) => {
        // Apply search and filter logic
        const filteredUsers = values.users.filter((user) => {
          return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (ageFilter ? user.age >= Number(ageFilter) : true)
          );
        });

        return (
          <Form>
            <h2>Filter & Search Users</h2>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
            />

            {/* Age Filter Dropdown */}
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
            >
              <option value="">All Ages</option>
              <option value="18">18+</option>
              <option value="25">25+</option>
              <option value="30">30+</option>
            </select>

            {/* Dynamic User List */}
            <FieldArray name="users">
              {({ push, remove }) => (
                <div>
                  {filteredUsers.map((user, index) => (
                    <div key={user.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                      <Field name={`users[${index}].name`} placeholder="Enter Name" />
                      <ErrorMessage name={`users[${index}].name`} component="div" style={{ color: "red" }} />

                      <Field name={`users[${index}].email`} placeholder="Enter Email" />
                      <ErrorMessage name={`users[${index}].email`} component="div" style={{ color: "red" }} />

                      <Field name={`users[${index}].age`} placeholder="Enter Age" type="number" />
                      <ErrorMessage name={`users[${index}].age`} component="div" style={{ color: "red" }} />

                      <button type="button" onClick={() => remove(index)} style={{ marginLeft: "10px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
                        Remove
                      </button>
                    </div>
                  ))}

                  {/* Add User Button */}
                  <button type="button" onClick={() => push({ id: Date.now(), name: "", email: "", age: "" })} style={{ background: "green", color: "white", border: "none", cursor: "pointer", padding: "5px 10px", marginTop: "10px" }}>
                    Add User
                  </button>
                </div>
              )}
            </FieldArray>

            {/* Submit Button */}
            <button type="submit" style={{ marginTop: "10px", padding: "8px 15px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
