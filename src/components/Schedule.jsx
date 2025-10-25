import React from 'react';
import { Calendar, Clock, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { time: '09:00', title: 'Check-in & Breakfast', icon: Users, desc: 'Pick up badges, meet fellow hackers, fuel up.' },
  { time: '10:00', title: 'Kickoff & Theme Reveal', icon: Rocket, desc: 'Opening remarks, partner intros, and the challenge.' },
  { time: '11:00', title: 'Hacking Begins', icon: Clock, desc: 'Find your flow. Mentors on-site all day.' },
  { time: '22:00', title: 'Midnight Checkpoint', icon: Calendar, desc: 'Lightning updates, vibes, and giveaways.' },
  { time: '09:00+1', title: 'Submission & Demos', icon: Rocket, desc: 'Showtime. Present to judges and the community.' },
];

export default function Schedule() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Event schedule</h2>
        <p className="mt-2 text-neutral-400">A fast-paced 24-hour journey. Times are local.</p>
      </div>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent" />
        <ul className="space-y-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.li key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} className="relative pl-12">
                <div className="absolute left-0 top-2 h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 grid place-items-center">
                  <Icon className="h-4 w-4 text-orange-400" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="text-sm text-neutral-400 w-24 shrink-0">{item.time}</div>
                  <div>
                    <h3 className="text-lg text-white font-medium">{item.title}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
