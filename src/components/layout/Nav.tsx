"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#si-projects", label: "SI Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        if (window.scrollY >= (section as HTMLElement).offsetTop - 80) {
          current = section.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[100] bg-bg h-[56px] flex items-center justify-between px-[48px] border-b border-sand-l transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(27,42,74,0.06)]" : ""
      }`}
    >
      <a
        href="#hero"
        className="font-serif text-[18px] text-navy tracking-[-0.02em]"
      >
        Lee Jaein
      </a>
      <div className="flex gap-[28px]">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-[11px] tracking-[0.08em] uppercase transition-colors duration-200 ${
              active === link.href.replace("#", "")
                ? "text-navy"
                : "text-muted hover:text-navy"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
