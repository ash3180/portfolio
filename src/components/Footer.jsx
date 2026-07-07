import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-500">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
            { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
            { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:text-emerald-400"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
