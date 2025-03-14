"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, we would send this data to a server
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", budget: "", message: "" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 mb-10">
      <div className="text-center mb-16">
        <h2 className="text-6xl md:text-7xl font-bold text-white">LET'S WORK</h2>
        <h2 className="text-6xl md:text-7xl font-bold text-[#444444]">TOGETHER</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Your@email.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-2">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="$1000 - $5000">$1000 - $5000</option>
            <option value="$5000 - $10000">$5000 - $10000</option>
            <option value="$10000+">$10000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input min-h-32"
            placeholder="Message"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
