import React, { useState } from "react";
import "./multi.css";
// Create a CSS file for styles

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    city: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  const totalSteps = 3;

  // 🧠 Validation for each step
  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
    } else if (step === 2) {
      if (!formData.age.trim()) newErrors.age = "Age is required";
      else if (isNaN(formData.age)) newErrors.age = "Age must be a number";
    } else if (step === 3) {
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.zip.trim()) newErrors.zip = "Zip is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("✅ Final Form Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="form-container">
      <h2>Multi Step Form</h2>

      {/* 🔹 Step Indicators */}
      <div className="step-indicator">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`circle ${step >= num ? "active" : ""}`}>
            {num}
          </div>
        ))}
      </div>

      {/* 🔹 Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      {/* 🔹 Form Steps */}
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </>
        )}

        {step === 2 && (
          <>
            <label>Age:</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </>
        )}

        {step === 3 && (
          <>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}

            <label>Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <p className="error">{errors.zip}</p>}
          </>
        )}

        {/* 🔹 Buttons */}
        <div className="button-container">
          {step > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;




// // csss 

// .form-container {
//     width: 400px;
//     margin: 40px auto;
//     padding: 20px;
//     border-radius: 10px;
//     background: #f9f9f9;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   }
  
//   h2 {
//     text-align: center;
//   }
  
//   .step-indicator {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 10px;
//   }
  
//   .circle {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     background: #ddd;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-weight: bold;
//   }
  
//   .circle.active {
//     background: #4caf50;
//     color: white;
//   }
  
//   .progress-bar {
//     width: 100%;
//     height: 8px;
//     background: #eee;
//     border-radius: 5px;
//     margin-bottom: 20px;
//     overflow: hidden;
//   }
  
//   .progress {
//     height: 100%;
//     background: #4caf50;
//     transition: width 0.3s ease;
//   }
  
//   input {
//     display: block;
//     width: 100%;
//     margin-bottom: 10px;
//     padding: 6px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
  
//   .error {
//     color: red;
//     font-size: 13px;
//     margin-bottom: 8px;
//   }
  
//   .button-container {
//     display: flex;
//     justify-content: space-between;
//   }
  
//   button {
//     background: #4caf50;
//     border: none;
//     color: white;
//     padding: 8px 16px;
//     border-radius: 5px;
//     cursor: pointer;
//   }
  
//   button:hover {
//     background: #45a049;
//   }
  