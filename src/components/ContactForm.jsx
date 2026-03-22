import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact-form">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
