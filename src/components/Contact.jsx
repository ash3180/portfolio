import { useState } from 'react';
import { FiSend, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, integrate with Formspree, EmailJS, or your own API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's build something great together"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <FadeInView className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-sm leading-relaxed text-zinc-400">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something meaningful.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
                    <FiMail size={16} />
                  </div>
                  {personalInfo.email}
                </a>

                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
                    <FaGithub size={16} />
                  </div>
                  GitHub
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-zinc-400 transition-colors hover:text-emerald-400"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/60">
                    <FaLinkedin size={16} />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeInView>

          {/* Contact form */}
          <FadeInView delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition-colors focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30 disabled:opacity-60 sm:w-auto"
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
