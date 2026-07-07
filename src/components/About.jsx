import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <FadeInView>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-8 sm:p-10">
            <div className="space-y-4">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-zinc-400">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {aboutData.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-zinc-800/40 bg-zinc-800/30 px-5 py-4 text-center"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-zinc-200">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
