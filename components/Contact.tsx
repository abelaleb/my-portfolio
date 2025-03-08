"use client";

import { useState, useRef, type FormEvent } from "react";
import { Button } from "./Button";
import {
  Check,
  Copy,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [numberCopied, setNumberCopied] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log({ email, message });
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after showing success message
    setTimeout(() => {
      setEmail("");
      setMessage("");
      setIsSuccess(false);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("abelalebachewasfaw@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  const copyNumber = () => {
    navigator.clipboard.writeText("+251904342947");
    setNumberCopied(true);
    setTimeout(() => setNumberCopied(false), 2000);
  };

  return (
    <section className="pb-6 bg-primary relative overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white  animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-white animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="w-full max-w-[75rem] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl my-8 font-normal text-center flex items-center justify-center gap-2"
        >
          Contact me
        </motion.h2>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-center mb-10 max-w-2xl mx-auto"
        >
        </motion.div> */}

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 p-6 rounded-lg backdrop-blur-sm w-full md:w-1/3"
          >
            <h3 className="text-white text-xl mb-4 font-medium">
              Get in touch
            </h3>

            <div className="flex items-center gap-3 mb-4 group">
              <div className="bg-white/20 p-2 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white/70 text-sm">Email</p>
                <p className="text-white group-hover:text-white/90 w-full">
                  abelalebachewasfaw@gmail.com
                </p>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Copy email"
              >
                {emailCopied ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3 mb-4 group">
              <div className="bg-white/20 p-2 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 ">
                <p className="text-white/70 text-sm">Phone</p>
                <p className="text-white group-hover:text-white/90">
                  +251-90-434-2947
                </p>
              </div>
              <button
                onClick={copyNumber}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Copy Phone Number"
              >
                {numberCopied ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <Copy className="h-5 w-5 text-white" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Response time</p>
                <p className="text-white">Within 24 hours</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm mb-4">Connect with me</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-6 md:gap-8 lg:gap-10"
              >
                <Link
                  href="https://t.me/abel_aleb"
                  className="text-white  transition-colors hover:transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={24} />
                </Link>

                <Link
                  href="https://wa.me/+251904342947"
                  className="text-green  transition-colors hover:transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp icon"
                    width={24}
                    height={24}
                    className="stroke-white"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abel-alebachew-2b8420229/"
                  className="text-white transition-colors hover:transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://twitter.com/sometimesabel"
                  className="text-white hover:text-background transition-colors hover:transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    size={24}
                    className="text-white transition-colors hover:transform hover:scale-110"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 text-white"
          >
            <div className="mb-6 relative">
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-200 ${
                  focusedField === "email" || email
                    ? "-top-2.5 text-xs bg-primary px-1"
                    : "top-4 text-white/70"
                }`}
              >
                Your email
              </label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                className={`w-full p-4 rounded-lg text-white bg-white/10 border-2 transition-all duration-200 ${
                  focusedField === "email"
                    ? "border-white"
                    : "border-transparent"
                } focus:outline-none`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all duration-200 ${
                  focusedField === "message" || message
                    ? "-top-2.5 text-xs bg-primary px-1"
                    : "top-4 text-white/70"
                }`}
              >
                Your message
              </label>
              <textarea
                id="message"
                ref={messageRef}
                className={`w-full p-4 rounded-lg text-white min-h-[150px] resize-vertical bg-white/10 border-2 transition-all duration-200 ${
                  focusedField === "message"
                    ? "border-white"
                    : "border-transparent"
                } focus:outline-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
              />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-left"
              />
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className={`relative overflow-hidden bg-white text-primary hover:bg-white/90 transition-all duration-300 ${
                  isSubmitting ? "pl-10" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting && (
                  <Loader2 className="absolute left-4 h-5 w-5 animate-spin" />
                )}
                {isSuccess ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send
                      className={`${isSubmitting ? "hidden" : "mr-2"} h-5 w-5`}
                    />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </>
                )}

                {/* Button hover effect */}
                <span className="absolute inset-0 w-full h-full bg-white/20 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100" />
              </Button>
            </div>
          </motion.form>
        </div>

        {/* Success message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-primary p-6 rounded-lg shadow-lg z-20 flex items-center gap-3"
          >
            <Check className="h-6 w-6" />
            <p className="font-medium">Message sent successfully!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
