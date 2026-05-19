import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Archiving() {
  return (
    <section
      id="archiving"
      className="bg-bg-s py-[80px] border-t border-b border-sand-l"
    >
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>Archiving</SectionLabel>
        </RevealWrapper>
        <div className="grid grid-cols-2 gap-[16px]">
          <RevealWrapper>
            <a
              href="https://github.com/zaenny"
              target="_blank"
              className="block border border-sand-l rounded-[10px] p-[24px] bg-bg-c hover:border-navy hover:-translate-y-[2px] transition-all duration-200"
            >
              <p className="text-[14px] font-medium text-navy mb-[6px]">
                GitHub
              </p>
              <p className="text-[12px] text-muted mb-[10px]">
                소스 코드 저장소
              </p>
              <p className="font-mono text-[11px] text-light">
                github.com/zaenny
              </p>
            </a>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <a
              href="https://velog.io/@sage116"
              target="_blank"
              className="block border border-sand-l rounded-[10px] p-[24px] bg-bg-c hover:border-navy hover:-translate-y-[2px] transition-all duration-200"
            >
              <p className="text-[14px] font-medium text-navy mb-[6px]">
                Velog
              </p>
              <p className="text-[12px] text-muted mb-[10px]">
                학습 기록 · 기술 블로그
              </p>
              <p className="font-mono text-[11px] text-light">
                velog.io/@sage116
              </p>
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
