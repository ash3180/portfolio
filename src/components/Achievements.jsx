import { FiAward, FiGitBranch, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  leetcode: SiLeetcode,
  github: FiGitBranch,
  research: FiFileText,
  certificate: FiCheckCircle,
  gate: FiAward,
};

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Achievements"
          subtitle="Milestones and recognitions"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || FiAward;
            return (
              <FadeInView key={item.title} delay={idx * 0.08}>
                <div className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700/60 hover:shadow-lg hover:shadow-zinc-950/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 transition-colors group-hover:bg-emerald-500/20">
                    <Icon size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
