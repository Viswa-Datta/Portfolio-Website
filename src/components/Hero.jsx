import React from 'react';
import { motion } from 'framer-motion';
import face from '@/images/face.jpg'; // Adjust the path as necessary

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 py-24 px-6">
      <div className="md:col-span-1 flex justify-center">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={face}
          alt="Viswa"
          className="w-44 h-44 rounded-lg object-cover shadow-lg"
        />
      </div>

      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hello, my name is <span className="text-primary">Viswa Datta.</span><br />
          I’m a <span className="text-primary">Full‑Stack Engineer</span>,<br />
          passionate about <span className="text-primary">building products.</span>
        </h1>

        <div className="mt-10 flex gap-6">
          <a href="#gallery"
             className="bg-primary text-white px-8 py-3 rounded-full font-semibold shadow hover:brightness-110 transition">
             My Projects
          </a>
          <a href="#contact"
             className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
             Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
