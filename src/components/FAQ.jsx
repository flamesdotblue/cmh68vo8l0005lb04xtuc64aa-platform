import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: 'Who can participate?', a: 'Anyone! Students, professionals, first-timers—diverse teams are encouraged.' },
  { q: 'How big can teams be?', a: 'Teams can have 1–5 members. You can also register solo and find teammates on-site.' },
  { q: 'Is the event in-person?', a: 'Yes, the hackathon is fully in-person. We provide space, power, Wi‑Fi, and meals.' },
  { q: 'What should I bring?', a: 'Bring your laptop, chargers, and any hardware you may need. We handle the rest.' },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/50">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
        <span className="text-white font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4 text-neutral-400 text-sm">
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Frequently asked questions</h2>
        <p className="mt-2 text-neutral-400">Quick answers to common questions about the event.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <Item key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  );
}
