type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-[12px] text-[10px] tracking-[0.16em] uppercase text-light mb-[44px]">
      <span>{children}</span>
      <div className="flex-1 h-[1px] bg-sand-l" />
    </div>
  );
}
