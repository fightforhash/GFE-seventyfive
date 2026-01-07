import { useState } from "react";
import submitForm from "./submitForm";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="post"
      onSubmit={submitForm}
    >
      <input name="name" value={formData.name} onChange={handleChange} />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input name="message" value={formData.message} onChange={handleChange} />
      <button>Send</button>
    </form>
  );
}
