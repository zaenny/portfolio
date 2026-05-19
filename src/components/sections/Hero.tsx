"use client";

export default function Hero() {
  return (
    <section id="hero" className="bg-bg-s py-[100px] border-b border-sand-l">
      <div className="max-w-[880px] mx-auto px-[48px]">
        <p
          className="font-mono text-[11px] tracking-[0.16em] uppercase text-light mb-[20px]"
          style={{ animation: "fadeUp 0.6s ease forwards 0.1s", opacity: 0 }}
        >
          Frontend Engineer
        </p>
        <h1
          style={{ fontSize: "clamp(34px, 5vw, 50px)" }}
          className="font-bold leading-[1.2] text-navy tracking-[-0.02em] mb-[20px]"
        >
          돌아가는 코드보다,
          <br />
          <span className="text-navy-l italic">더 나은 코드를</span> 고민합니다
        </h1>
        <p
          className="text-[15px] text-muted max-w-[520px] leading-[1.85] mb-[36px]"
          style={{ animation: "fadeUp 0.7s ease forwards 0.35s", opacity: 0 }}
        >
          5년간 금융·공공 SI에서 프론트엔드와 백엔드를 함께 다루며, 코드리뷰와
          성장이 있는 환경을 찾아 모던 프론트엔드로 전환했습니다. React ·
          Next.js · TypeScript로 더 나은 사용자 경험을 만들어 갑니다.
        </p>
        <div
          className="flex gap-[12px] flex-wrap"
          style={{ animation: "fadeUp 0.6s ease forwards 0.5s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="text-[12px] tracking-[0.04em] px-[22px] py-[10px] rounded-[24px] bg-navy text-bg border border-navy hover:bg-navy-l hover:border-navy-l transition-all duration-200"
          >
            프로젝트 보기
          </a>

          <a
            href="https://github.com/zaenny"
            target="_blank"
            className="text-[12px] tracking-[0.04em] px-[22px] py-[10px] rounded-[24px] bg-transparent text-muted border border-sand hover:border-navy hover:text-navy transition-all duration-200"
          >
            GitHub
          </a>

          <a
            href="https://velog.io/@sage116"
            target="_blank"
            className="text-[12px] tracking-[0.04em] px-[22px] py-[10px] rounded-[24px] bg-transparent text-muted border border-sand hover:border-navy hover:text-navy transition-all duration-200"
          >
            Velog
          </a>
        </div>
      </div>
    </section>
  );
}
