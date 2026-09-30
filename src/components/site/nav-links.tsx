"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type NavItem = { id: string; index: string; label: string; href: string };

/**
 * Desktop navigation. On the home page it marks the section currently in
 * view: an IntersectionObserver watches the sections, no scroll listener.
 */
export function NavLinks({ items, homePath }: { items: NavItem[]; homePath: string }) {
  const pathname = usePathname();
  const onHome = pathname === homePath;
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!onHome) return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // A thin band just below the header decides which section is current.
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, onHome]);

  const current = onHome ? active : null;

  return (
    <ul className="flex items-center">
      {items.map((item) => {
        const isActive = current === item.id;
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative inline-flex h-10 items-center px-3 text-small font-medium transition-colors duration-200",
                isActive ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-accent transition-transform duration-300 ease-out",
                  isActive ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
