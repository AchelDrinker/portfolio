"use client"
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  
  const [showPopup, setShowPopup] = useState(false);  // État pour le pop-up

  const closePopup = () => setShowPopup(false);  // Fonction pour fermer le pop-up

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fullname = event.currentTarget.fullname.value;
    const email = event.currentTarget.email.value;
    const subject = event.currentTarget.subject.value;
    const message = event.currentTarget.message.value;

    try {
        const response = await fetch('/api/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname,
                email,
                subject,
                message,
            }),
        });

        if (response.ok) {
          console.log("Email envoyé avec succès !");
          event.currentTarget.reset();
          setShowPopup(true);
        } else {
            console.log("Erreur lors de l'envoi de l'email");
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de l'envoi de l'email", error);
    }
};


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Pop-up */}
      {showPopup && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded p-5">
          <h2>Your email has been sent</h2>
          <button 
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400 hover:bg-slate-200 text-white"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
      )}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/AchelDrinker">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="www.linkedin.com/in/hugomartineu">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
            <label
              htmlFor="fullname"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your name
            </label>
            <input
              type="text"
              id="fullname"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </div>
    </section>
  );
};

export default EmailSection;