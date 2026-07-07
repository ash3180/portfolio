import { FiBriefcase, FiClock } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <FadeInView>
          <div className="rounded-2xl border border-dashed border-zinc-700/60 bg-zinc-900/30 px-8 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
              <FiClock size={22} className="text-emerald-500" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-zinc-200">
              Coming Soon
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
              I'm a fresher actively looking for opportunities. This section will be updated as I gain professional experience.
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
