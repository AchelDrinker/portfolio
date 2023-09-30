"use client"
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"https://www.linkedin.com/in/hugomartineu"}>
            <span>HUGO MARTINEU</span>
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;