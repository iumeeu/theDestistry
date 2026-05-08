"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");

  return (
    <div className="lang-switch">
      <Link href="/th" className={!isEN ? "lang-switch__active" : "lang-switch__item"}>
        TH
      </Link>
      <span className="lang-switch__sep">/</span>
      <Link href="/en" className={isEN ? "lang-switch__active" : "lang-switch__item"}>
        EN
      </Link>
    </div>
  );
}
