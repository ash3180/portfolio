import { FiBookOpen } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Education"
          subtitle="My academic background"
        />

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <FadeInView key={idx} delay={idx * 0.1}>
              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                    <FiBookOpen size={18} className="text-emerald-500" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-zinc-100">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-medium text-zinc-500">
                        {edu.period}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-emerald-400/80">
                      {edu.institution}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {edu.description}
                    </p>

                    {edu.gpa && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-zinc-800/60 px-3 py-1.5">
                        <span className="text-xs font-medium text-zinc-500">
                          GPA:
                        </span>
                        <span className="text-xs font-semibold text-zinc-300">
                          {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
