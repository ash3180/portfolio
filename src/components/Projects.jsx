import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from './ui/SectionHeading';
import FadeInView from './ui/FadeInView';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Things I've built"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, idx) => (
            <FadeInView key={project.title} delay={idx * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/50 transition-all duration-300 hover:border-zinc-700/60 hover:shadow-xl hover:shadow-zinc-950/50">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-800">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <span className="text-3xl font-bold text-zinc-700 transition-colors group-hover:text-emerald-800">
                      {project.title.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  {project.achievements && (
                    <ul className="mt-3 space-y-1">
                      {project.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-zinc-500"
                        >
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-500" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-zinc-800/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-auto flex items-center gap-3 pt-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/50 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-600 hover:text-zinc-200"
                      >
                        <FiGithub size={13} />
                        Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
                      >
                        <FiExternalLink size={13} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
