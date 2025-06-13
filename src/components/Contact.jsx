import React, { useState } from 'react';
import face from '@/images/face.jpg';   // keep your avatar path

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData(e.target);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('ok');
        e.target.reset();    // clear fields
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <img src={face} alt="Avatar" className="w-20 h-20 mx-auto rounded-full mb-4" />
        <h2 className="text-4xl font-extrabold mb-6">Contact Me</h2>

        {status === 'ok'  && <p className="mb-4 text-green-500">Message sent ✔</p>}
        {status === 'err' && <p className="mb-4 text-red-500">Something went wrong ✖</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="name"   type="text"   placeholder="Your name"  required className="w-full border-b py-3 bg-transparent focus:outline-none" />
          <input name="email"  type="email"  placeholder="Your email" required className="w-full border-b py-3 bg-transparent focus:outline-none" />
          <input name="phone"  type="tel"    placeholder="Phone (optional)"       className="w-full border-b py-3 bg-transparent focus:outline-none" />
          <textarea name="message" rows="3"  placeholder="Your message" required className="w-full border-b py-3 bg-transparent focus:outline-none" />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-gray-800 text-white py-3 rounded-full hover:bg-gray-900 transition"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>

        <footer className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Viswa Datta Gudapati. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
