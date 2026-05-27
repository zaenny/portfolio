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
                금융·공공 등{" "}
                <strong className="text-navy font-medium">
                  다양한 서비스
                </strong>
                를 개발하며 서버부터 클라이언트까지 폭넓게 경험했습니다.
              </p>
              <p>
                그 과정에서 사용자와 가장 직접적으로 맞닿는{" "}
                <strong className="text-navy font-medium">프론트엔드</strong>에
                더 깊이 집중하고 싶어졌고, 더 나은 경험을 만드는 방향으로
                전환을 결심했습니다.
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
              ].map((item) => (
                <div
                  key={item.label}
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
