"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRef, useState } from "react";
import { cta, navItems, profile } from "@/content/profile";

const iconButton =
  "inline-flex size-11 items-center justify-center rounded-sheet text-ink transition-colors duration-150 hover:bg-ink hover:text-ground";

/**
 * Navigation below 1024px. A native <dialog> gives the focus trap, Escape to
 * close, and focus returning to the menu button without extra code.
 */
export function MobileMenu() {
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
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialog}
        id="mobile-menu"
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none flex-col bg-ground p-0 text-ink open:flex"
      >
        <div className="container-page flex h-16 shrink-0 items-center justify-between border-b border-line">
          <span className="text-[1.0625rem] font-bold tracking-tight">
            {profile.name}
          </span>
          <button type="button" onClick={closeMenu} className={iconButton}>
            <XIcon aria-hidden="true" className="size-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <nav aria-label="Primary" className="container-page flex-1 overflow-y-auto py-6">
          <ul className="divide-y divide-line border-y border-line">
            {[...navItems, cta.contact].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="type-heading flex min-h-14 items-center py-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex gap-2">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={iconButton}
              >
                <GithubLogoIcon aria-hidden="true" className="size-6" />
                <span className="sr-only">GitHub (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className={iconButton}
              >
                <LinkedinLogoIcon aria-hidden="true" className="size-6" />
                <span className="sr-only">LinkedIn (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
