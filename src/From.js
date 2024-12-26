import React, { useState } from "react";
import './From.css';

const From= () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        subjects: checked
          ? [...prevData.subjects, value]
          : prevData.subjects.filter((subject) => subject !== value),
      }));
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: [],
      resume: null,
      url: "",
      choice: "",
      about: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted!");
  };

  return (
    <div className="form-container">
      <h2>Form in React</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name*:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
        </label>
        <label>
          Last Name*:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
        </label>
        <label>
          Enter Email*:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </label>
        <label>
          Contact*:
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            required
          />
        </label>
        <label>
          Gender*:
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </div>
        </label>
        <label>
          Select Subject*:
          <div>
            <input
              type="checkbox"
              name="subjects"
              value="English"
              checked={formData.subjects.includes("English")}
              onChange={handleChange}
            />
            English
            <input
              type="checkbox"
              name="subjects"
              value="Maths"
              checked={formData.subjects.includes("Maths")}
              onChange={handleChange}
            />
            Maths
            <input
              type="checkbox"
              name="subjects"
              value="Physics"
              checked={formData.subjects.includes("Physics")}
              onChange={handleChange}
            />
            Physics
          </div>
        </label>
        <label>
          Upload Resume*:
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Enter URL*:
          <input
            type="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter URL"
            required
          />
        </label>
        <label>
          Select Your Choice:
          <select
            name="choice"
            value={formData.choice}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Your Ans
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </label>
        <label>
          About*:
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="About Yourself"
            required
          ></textarea>
        </label>
        <div className="buttons">
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default From;