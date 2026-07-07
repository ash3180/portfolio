import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { skillsData } from '../data/portfolioData';

const categoryColors = {
  'Programming': 'border-blue-500/20 bg-blue-500/5',
  'AI / ML': 'border-purple-500/20 bg-purple-500/5',
  'Generative AI': 'border-emerald-500/20 bg-emerald-500/5',
  'Backend': 'border-orange-500/20 bg-orange-500/5',
  'Database': 'border-cyan-500/20 bg-cyan-500/5',
  'Tools': 'border-zinc-500/20 bg-zinc-500/5',
  'Cloud': 'border-amber-500/20 bg-amber-500/5',
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, idx) => (
            <FadeInView key={group.category} delay={idx * 0.05}>
              <div
                className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-950/50 ${
                  categoryColors[group.category] || 'border-zinc-800/40 bg-zinc-800/20'
                }`}
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-zinc-700/50 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
