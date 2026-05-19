import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy py-[80px]">
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <div className="flex items-center gap-[12px] text-[10px] tracking-[0.16em] uppercase text-white/30 mb-[44px]">
            <span>Contact</span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <h2 className="font-serif text-[36px] text-bg tracking-[-0.02em] mb-[12px]">
            함께 일해요
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <p className="text-[14px] text-white/50 mb-[36px] leading-[1.8]">
            새로운 기회나 협업 제안은 언제든 환영합니다.
            <br />
            아래 이메일로 편하게 연락 주세요.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={300}>
          <a
            href="mailto:xoox1106@daum.net"
            className="font-mono text-[15px] text-[#D4E0F0] border-b border-[#D4E0F0]/30 pb-[2px] hover:border-[#D4E0F0] transition-colors duration-200"
          >
            xoox1106@daum.net
          </a>
        </RevealWrapper>
      </div>
    </section>
  );
}
