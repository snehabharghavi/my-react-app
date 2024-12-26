
import React, { useState } from "react";

function Student() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      email,
      phone,
      course,
    };
    setStudents([...students, newStudent]);
    setName("");
    setEmail("");
    setPhone("");
    setCourse("");
  };

  return (
    <div>
      <h1 align="center" style={{color:"darkblue",backgroundColor:"PINK"}}>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <label>Course:</label>
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        <br />
        <button type="submit">Register</button>
      </form>
      <h2 align="center" style={{color:"darkblue",backgroundColor:"PINK"}}>Registered Students:</h2>
      <ul align="center" style={{color:"darkblue",backgroundColor:"PINK"}}>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.email} - {student.phone} - {student.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
