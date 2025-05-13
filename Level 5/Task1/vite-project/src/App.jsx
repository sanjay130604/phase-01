import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (values, { resetForm }) => {
    const newTask = {
      id: uuidv4(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={addTask}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="Task Title" required />
            <Field name="description" placeholder="Task Description" required />
            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? "bg-gray-300" : "bg-white"}>
            <div>
              <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
              <span className={task.completed ? "line-through" : ""}>{task.title} - {task.description}</span>
            </div>
            <div>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
