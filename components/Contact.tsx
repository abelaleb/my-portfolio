"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <section className="p-16 bg-secondary" id="contact">
      <div className="w-full max-w-[75rem] p-4 ">
        <h2 className="bg-primary text-center font-bold mb-8">Contact me</h2>

        <form onSubmit={handleSubmit} className="max-w-[32rem] mx-auto">
          <div className="mb-4 ">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 rounded-lg bg-secondary-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your message"
              className="w-full p-4 rounded-lg bg-secondary-200 min-h-[150px] resize-vertical"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </section>
  );
}
