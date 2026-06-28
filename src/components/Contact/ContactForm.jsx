"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.message.trim())
      newErrors.message = "Please enter your message.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 p-[1px]">
      <div className="rounded-3xl bg-surface p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-pink-500"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-pink-500"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-border bg-background px-5 py-4 text-foreground outline-none transition-all duration-300 focus:border-pink-500"
            />
            {errors.message && (
              <p className="mt-2 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-full border border-white/30 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Send Message →
          </button>

          {success && (
            <p className="text-green-500 font-medium">
              ✓ Message sent successfully!
            </p>
          )}

        </form>

      </div>
    </div>
  );
}