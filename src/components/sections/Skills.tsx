import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-bg-s py-[80px] border-t border-b border-sand-l"
    >
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>Skills</SectionLabel>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <div className="flex flex-wrap gap-[8px]">
            {skills.map((skill) => (
              <Tag key={skill.name} name={skill.name} highlight={skill.highlight} />
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
