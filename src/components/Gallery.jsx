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
      blurb: 'React + Gemini AI platform with adaptive mock-interviews & analytics.',
    },
    {
      title: 'Glaucoma Detection',
      img: glaucomaImg,
      blurb: '94 %-precision CNN detecting glaucoma on retinal fundus images.',
    },
    {
      title: 'Chef Guruji',
      img: chefGurujiImg,
      blurb: 'Full-stack web app for personalised meal plans & grocery lists.',
    },
  ];

  const [loaded, setLoaded] = useState(Array(items.length).fill(false));

  return (
    <section id="gallery" className="bg-dark py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-10">Recent Works</h2>

        {/* equal-height grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative h-64 w-full rounded-lg overflow-hidden group shadow-lg"
            >
              {/* skeleton placeholder */}
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

              {/* caption overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-snug">{item.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
