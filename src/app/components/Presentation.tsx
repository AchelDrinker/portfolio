"use client"
import React from 'react';
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const Presentation = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold min-h-[3.5em]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400">
              Hello, I&apos;m {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Hugo',
                1000,
                'Student at 42',
                1000,
                'Looking for an internship',
                1000,
                'Learning AI and Datascience',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I&apos;m currently retraining in the IT field and I&apos;m looking for a 4 to 6 months internship in Development, Data or Machine Learning
          </p>
          <div>
            <a href="https://www.linkedin.com/in/hugomartineu" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400 hover:bg-slate-200 text-white">
                Hire me
              </button>
            </a>
            <a href="/elements/CV-HUGO-MARTINEU-STAGE.pdf" download>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-green-400 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hugo_martineu_bubble.png"
              alt="hugo_martineu_bubble"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation