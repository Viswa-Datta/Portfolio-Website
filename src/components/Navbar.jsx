import React from 'react';

export default function Navbar() {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'gallery', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <span className="font-extrabold text-lg">Portfolio</span>
        <ul className="hidden md:flex gap-8 tracking-wide text-sm">
          {links.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="hover:text-white/80">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:viswadattagudapati1@gmail.com" className="font-semibold whitespace-nowrap text-sm hover:text-white/80">
          viswadattagudapati1@gmail.com
        </a>
      </nav>
    </header>
  );
}
