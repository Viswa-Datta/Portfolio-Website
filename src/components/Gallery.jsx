import React, { useState } from 'react';
import { motion } from 'framer-motion';

import smartHireImg   from '@/images/smarthire.jpg';
import glaucomaImg    from '@/images/glaucoma.png';
import chefGurujiImg  from '@/images/chef-guruji.png';

export default function Gallery() {
  const items = [
    {
      title: 'Smart Hire AI',
      img: smartHireImg,
      blurb: 'AI-powered interview platform featuring adaptive question generation and real-time feedback[cite: 31].',
      link: 'https://smart-hire-ai-zlwi.vercel.app/',
    },
    {
      title: 'Glaucoma Detection',
      img: glaucomaImg,
      blurb: 'Deep learning system achieving 94% precision in detecting glaucoma from retinal images[cite: 37].',
      link: 'https://ieeexplore.ieee.org/document/10126431', // Placeholder for your IEEE publication link 
    },
    {
      title: 'Chef Guruji',
      img: chefGurujiImg,
      blurb: 'Dynamic recipe discovery platform with personalized meal planning and responsive UI.',
      link: 'https://chef-guruji.vercel.app/',
    },
  ];

  const [loaded, setLoaded] = useState(Array(items.length).fill(false));

  return (
    <section id="gallery" className="bg-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Recent Works</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative h-64 w-full rounded-lg overflow-hidden group shadow-lg cursor-pointer"
            >
              {/* Wrap content in a link */}
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                {!loaded[i] && (
                  <div className="absolute inset-0 bg-gray-700/40 animate-pulse" />
                )}

                <img
                  src={item.img}
                  alt={item.title}
                  onLoad={() =>
                    setLoaded(prev => {
                      const next = [...prev];
                      next[i] = true;
                      return next;
                    })
                  }
                  className={`absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
                    loaded[i] ? 'block' : 'hidden'
                  }`}
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    {/* Visual indicator for external link */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 leading-snug">{item.blurb}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
