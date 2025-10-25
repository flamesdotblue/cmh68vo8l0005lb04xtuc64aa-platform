import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Mail, User, Calendar } from 'lucide-react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    teamName: '',
    role: 'Developer',
    track: 'AI/ML',
    members: 1,
    agree: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!form.fullName.trim()) return 'Please enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address';
    if (!form.agree) return 'You must accept the rules to register';
    return '';
    };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setSuccess(true);
      setForm({ fullName: '', email: '', teamName: '', role: 'Developer', track: 'AI/ML', members: 1, agree: false });
    } catch (e) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Register your team</h2>
        <p className="mt-2 text-neutral-400">Spots are limited. Secure your place for a 24-hour sprint of creativity and code.</p>
      </div>

      <div className="relative rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent" />
        <form onSubmit={onSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Full name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                placeholder="Alex Johnson"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Team name (optional)</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                name="teamName"
                value={form.teamName}
                onChange={onChange}
                placeholder="Night Owls"
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={onChange}
              className="w-full pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
            >
              <option>Developer</option>
              <option>Designer</option>
              <option>Product</option>
              <option>Data Scientist</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Track</label>
            <select
              name="track"
              value={form.track}
              onChange={onChange}
              className="w-full pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
            >
              <option>AI/ML</option>
              <option>Web3</option>
              <option>HealthTech</option>
              <option>Open Source</option>
              <option>FinTech</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm text-neutral-300 mb-2">Team size</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <input
                name="members"
                type="number"
                min={1}
                max={5}
                value={form.members}
                onChange={(e) => setForm((f) => ({ ...f, members: Number(e.target.value) }))}
                className="w-full pl-10 pr-3 py-3 rounded-lg bg-neutral-950/70 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 transition"
              />
            </div>
          </div>

          <div className="md:col-span-2 flex items-start gap-3">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={onChange}
              className="mt-1 h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-orange-500 focus:ring-orange-500/60"
            />
            <label htmlFor="agree" className="text-sm text-neutral-300">
              I agree to the event rules and code of conduct.
            </label>
          </div>

          <div className="md:col-span-2 flex items-center gap-4">
            <motion.button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white px-6 py-3 text-sm font-medium shadow-[0_8px_20px_rgba(234,88,12,0.35)] disabled:opacity-70 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.98 }}
            >
              {submitting ? 'Submitting…' : 'Submit registration'}
            </motion.button>
            <AnimatePresence>
              {error && (
                <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="text-sm text-red-400">
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </form>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 rounded-lg border border-green-900/40 bg-green-900/20 p-4 text-green-300"
            >
              Registration received! We sent a confirmation email with next steps.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
