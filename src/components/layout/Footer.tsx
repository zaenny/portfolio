const links = [
  { href: "https://github.com/zaenny", label: "GitHub" },
  { href: "https://velog.io/@sage116", label: "Velog" },
  { href: "mailto:xoox1106@daum.net", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-navy px-[48px] py-[24px] border-t border-white/[0.06] flex items-center justify-between">
      <span className="font-mono text-[11px] text-white/25">
        © 2025 Lee Jaein. All rights reserved.
      </span>
      <div className="flex gap-[20px]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            className="font-mono text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
