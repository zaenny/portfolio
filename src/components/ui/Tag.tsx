type TagProps = {
  name: string;
  highlight?: boolean;
};

export default function Tag({ name, highlight = false }: TagProps) {
  return (
    <span
      className={`text-[11px] rounded-[4px] px-[10px] py-[3px] border ${
        highlight
          ? "bg-tag-hi text-tag-hi-t border-[#B8CCE4]"
          : "bg-tag-bg text-muted border-sand-l"
      }`}
    >
      {name}
    </span>
  );
}
