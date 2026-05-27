"use client";

import { useEffect } from "react";
import BffDiagram from "./BffDiagram";

export interface ProjectDetail {
  background: string;
  challenge: string;
  solution: string;
  outcome: string;
  showBffDiagram?: boolean;
}

interface Props {
  name: string;
  detail: ProjectDetail;
  onClose: () => void;
}

export default function ProjectModal({ name, detail, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 backdrop-blur-sm px-[16px]"
      onClick={onClose}
    >
      <div
        className="bg-bg w-full max-w-[640px] max-h-[85vh] overflow-y-auto rounded-[16px] p-[40px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[24px] font-mono text-[11px] text-muted hover:text-navy transition-colors"
        >
          ✕ close
        </button>

        <h2 className="text-[18px] font-medium text-navy mb-[28px]">{name}</h2>

        {detail.showBffDiagram && (
          <div className="mb-[28px]">
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-light mb-[12px]">
              Architecture
            </p>
            <BffDiagram />
          </div>
        )}

        {[
          { label: "Background", content: detail.background },
          { label: "Challenge", content: detail.challenge },
          { label: "Solution", content: detail.solution },
          { label: "Outcome", content: detail.outcome },
        ].map(({ label, content }) => (
          <div key={label} className="mb-[22px]">
            <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-light mb-[8px]">
              {label}
            </p>
            <p className="text-[14px] text-muted leading-[1.9]">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
