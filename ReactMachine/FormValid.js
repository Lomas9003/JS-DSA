import React, { useState } from 'react';
import './styles.css';

function ContactForm() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    age: "",
    message: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const newError = {};

    if (!value.name.trim()) newError.name = "Name is required";

    if (!value.email.trim()) newError.email = "Email is required";

    if (!value.age) {
      newError.age = "Age is required";
    } else if (Number(value.age) < 18) {
      newError.age = "Age must be at least 18";
    }

    if (!value.message.trim()) newError.message = "Message is required";

    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = handleValidation();
    if (Object.keys(validate).length > 0) {
      setError(validate);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      {show ? (
        <h2>Thank you, {value.name}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
                              name="email"
              required
              value={value.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              name="age"
              min="0"
              value={value.age}
              onChange={handleChange}
            />
            {error.age && <p style={{ color: "red" }}>{error.age}</p>}
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={value.message}
              onChange={handleChange}
            />
            {error.message && <p style={{ color: "red" }}>{error.message}</p>}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
