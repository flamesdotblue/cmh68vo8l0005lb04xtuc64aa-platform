import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.25),rgba(0,0,0,0.8))]" />

      <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/90 rounded-full px-3 py-1 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs">Registrations now open</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              NightShift Hackathon
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-neutral-300 max-w-2xl">
              24 hours. Infinite ideas. Build with the brightest minds in a high-energy, dark-themed arena of code, design, and innovation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button
                onClick={scrollToRegister}
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white px-5 py-3 text-sm font-medium shadow-[0_8px_20px_rgba(234,88,12,0.35)] hover:shadow-[0_12px_28px_rgba(234,88,12,0.45)] transition-shadow"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
              >
                <Rocket className="h-4 w-4" />
                Register now
              </motion.button>
              <a href="#schedule" className="text-sm text-neutral-300 hover:text-white transition-colors">
                View schedule
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
