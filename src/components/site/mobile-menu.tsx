"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
  WhatsappLogoIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRef, useState } from "react";
import type { NavItem } from "./nav-links";

const iconButton =
  "inline-flex size-10 items-center justify-center rounded-sheet text-ink transition-colors duration-200 hover:bg-surface-2";

type Labels = {
  open: string;
  close: string;
  menu: string;
  newTab: string;
  cv?: string;
  whatsapp: string;
};

/**
 * Navigation below 1024px. A native <dialog> gives the focus trap, Escape to
 * close, and focus returning to the menu button without extra code.
 */
export function MobileMenu({
  name,
  items,
  labels,
  links,
  languageSwitch,
}: {
  name: string;
  items: NavItem[];
  labels: Labels;
  links: { github: string; linkedin: string; whatsapp: string; cv?: string };
  /** The language switch, rendered by the header. */
  languageSwitch: React.ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    dialog.current?.showModal();
    setOpen(true);
  };
  const closeMenu = () => dialog.current?.close();

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={openMenu}
        className={iconButton}
      >
        <ListIcon aria-hidden="true" className="size-6" />
        <span className="sr-only">{labels.open}</span>
      </button>

      <dialog
        ref={dialog}
        id="mobile-menu"
        aria-label={labels.menu}
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none flex-col bg-ground p-0 text-ink open:flex"
      >
        <div className="container-page flex h-16 shrink-0 items-center justify-between border-b border-line">
          <span className="text-[1.0625rem] font-bold tracking-tight">{name}</span>
          <button type="button" onClick={closeMenu} className={iconButton}>
            <XIcon aria-hidden="true" className="size-6" />
            <span className="sr-only">{labels.close}</span>
          </button>
        </div>

        <nav aria-label={labels.menu} className="container-page flex-1 overflow-y-auto py-6">
          <ul className="border-y border-line">
            {items.map((item) => (
              <li key={item.id} className="border-b border-line last:border-b-0">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-14 items-center justify-between py-3 text-[1.375rem] font-semibold"
                >
                  {item.label}
                  <span className="type-code text-muted" dir="ltr">
                    {item.index}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {languageSwitch}
            {links.cv ? (
              <a
                href={links.cv}
                download
                onClick={closeMenu}
                className="inline-flex h-10 items-center rounded-sheet border border-line-strong px-4 text-small font-semibold"
              >
                {labels.cv}
              </a>
            ) : null}
          </div>

          <ul className="mt-6 flex gap-1">
            <li>
              <a href={links.whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu} className={iconButton}>
                <WhatsappLogoIcon aria-hidden="true" className="size-6" />
                <span className="sr-only">
                  {labels.whatsapp} {labels.newTab}
                </span>
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noreferrer" onClick={closeMenu} className={iconButton}>
                <GithubLogoIcon aria-hidden="true" className="size-6" />
                <span className="sr-only">GitHub {labels.newTab}</span>
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noreferrer" onClick={closeMenu} className={iconButton}>
                <LinkedinLogoIcon aria-hidden="true" className="size-6" />
                <span className="sr-only">LinkedIn {labels.newTab}</span>
              </a>
            </li>
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
