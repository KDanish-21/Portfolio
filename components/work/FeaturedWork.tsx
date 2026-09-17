import ArchiveList from "./ArchiveList";
import CaseStudy from "./CaseStudy";
import SectionHeader from "@/components/ui/SectionHeader";
import { contact, featuredProjects } from "@/lib/content";

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-16 border-b border-hair">
      <div className="px-5 pt-8 md:px-gutter">
        <SectionHeader
          title="Featured Work"
          subtitle="Real projects. Real impact."
          note={[
            "A selection of projects that solve real-world problems",
            "from enterprise systems to consumer apps.",
          ]}
          actionLabel="View all projects"
          actionHref={contact.github.href}
        />
      </div>

      <div className="mt-8 grid border-t border-hair lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <CaseStudy key={project.slug} project={project} position={i} />
        ))}
      </div>

      <ArchiveList />
    </section>
  );
}
