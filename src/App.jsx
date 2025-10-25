import React from 'react';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-inter selection:bg-red-600/30 selection:text-white">
      <Hero />
      <main className="relative z-10">
        <section id="schedule" className="container mx-auto px-4 py-20">
          <Schedule />
        </section>
        <section id="register" className="container mx-auto px-4 py-20">
          <RegistrationForm />
        </section>
        <section id="faq" className="container mx-auto px-4 py-20">
          <FAQ />
        </section>
      </main>
      <footer className="border-t border-neutral-800/70">
        <div className="container mx-auto px-4 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} NightShift Hackathon. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#schedule" className="hover:text-gray-200 transition-colors">Schedule</a>
            <a href="#register" className="hover:text-gray-200 transition-colors">Register</a>
            <a href="#faq" className="hover:text-gray-200 transition-colors">FAQ</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
