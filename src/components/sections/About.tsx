import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section id="about" className="bg-bg py-[80px]">
      <div className="max-w-[880px] mx-auto px-[48px]">
        <RevealWrapper>
          <SectionLabel>About Me</SectionLabel>
        </RevealWrapper>
        <div className="grid grid-cols-2 gap-[52px] items-start">
          <RevealWrapper delay={100}>
            <div className="flex flex-col gap-[16px] text-[15px] text-muted leading-[1.9]">
              <p>
                SI 환경에서{" "}
                <strong className="text-navy font-medium">
                  금융·공공 도메인
                </strong>{" "}
                프로젝트를 5년간 수행하며 프론트엔드부터 백엔드, 안드로이드 앱
                유지보수까지 폭넓게 경험했습니다.
              </p>
              <p>
                코드리뷰 없이 {'"돌아가면 끝"'}인 환경에서 스스로의 성장을
                확인하기 어려웠고, 더 나은 코드를 고민하고 피드백받을 수 있는
                환경을 찾아{" "}
                <strong className="text-navy font-medium">
                  모던 프론트엔드
                </strong>
                로 전환을 결심했습니다.
              </p>
              <p>
                현재 Codeit Sprint FESI-13 과정을 통해 팀 협업과 Next.js ·
                TypeScript · TanStack Query 등 최신 기술을 실전에 적용하며
                꾸준히 성장하고 있습니다.
              </p>
            </div>
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <div>
              {[
                { label: "이름", value: "Lee Jaein" },
                { label: "위치", value: "서울" },
                {
                  label: "이메일",
                  value: "xoox1106@daum.net",
                  href: "mailto:xoox1106@daum.net",
                },
                {
                  label: "GitHub",
                  value: "github.com/zaenny",
                  href: "https://github.com/zaenny",
                },
                {
                  label: "Blog",
                  value: "velog.io/@sage116",
                  href: "https://velog.io/@sage116",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-[16px] py-[13px] border-b border-sand-l first:border-t first:border-sand-l"
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-light w-[72px] flex-shrink-0 pt-[2px]">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      className="text-[13px] text-navy-l hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[13px] text-navy">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
