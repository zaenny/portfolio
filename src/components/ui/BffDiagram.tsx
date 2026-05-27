export default function BffDiagram() {
  return (
    <div className="bg-bg-s rounded-[12px] p-[24px] border border-sand-l font-mono text-[11px] flex flex-col gap-[24px]">

      {/* 정상 흐름 */}
      <div>
        <p className="text-[10px] tracking-[0.1em] uppercase text-light mb-[14px]">
          Normal Flow
        </p>
        <div className="flex flex-col items-center max-w-[360px] mx-auto">
          <div className="w-full border border-sand rounded-[8px] px-[14px] py-[10px] text-center bg-bg">
            <p className="text-[12px] font-medium text-navy">Browser</p>
            <p className="text-[10px] text-muted mt-[2px]">HttpOnly Cookie 저장</p>
          </div>
          <Arrow label="↕ Cookie (JS 접근 불가)" />
          <div className="w-full border-[1.5px] border-navy-l rounded-[8px] px-[14px] py-[10px] text-center bg-tag-hi">
            <p className="text-[12px] font-medium text-navy">Next.js Server (BFF)</p>
            <p className="text-[10px] text-tag-hi-t mt-[2px]">Cookie ↔ Token 변환</p>
          </div>
          <Arrow label="↕ Authorization Header" />
          <div className="w-full border border-sand rounded-[8px] px-[14px] py-[10px] text-center bg-bg">
            <p className="text-[12px] font-medium text-navy">Backend API</p>
            <p className="text-[10px] text-muted mt-[2px]">토큰 검증</p>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-l" />

      {/* 갱신 흐름 */}
      <div>
        <p className="text-[10px] tracking-[0.1em] uppercase text-light mb-[14px]">
          Token Refresh Flow (401)
        </p>
        <div className="flex flex-col gap-[8px] max-w-[360px] mx-auto">
          {[
            { step: "1", text: "Backend → 401 (토큰 만료)" },
            { step: "2", text: "Next.js → Refresh Token 재요청" },
            { step: "3", text: "Backend → 새 Access Token 발급" },
            { step: "4", text: "Next.js → Cookie 업데이트" },
            { step: "5", text: "원래 요청 자동 재시도" },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-center gap-[12px]">
              <span className="w-[20px] h-[20px] rounded-full bg-tag-hi border border-navy-l text-[10px] text-navy flex items-center justify-center flex-shrink-0">
                {step}
              </span>
              <p className="text-[11px] text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function Arrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-[4px] gap-[2px]">
      <div className="w-[1px] h-[10px] bg-sand-l" />
      <p className="text-[10px] text-light px-[8px]">{label}</p>
      <div className="w-[1px] h-[10px] bg-sand-l" />
    </div>
  );
}
