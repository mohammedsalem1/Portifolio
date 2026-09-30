import { ButtonLink } from "@/components/ui/button";
import { cta, profile } from "@/content/profile";
import { Pipeline } from "./pipeline";

/**
 * First viewport: who he is, what kind of engineer, and how to go further.
 * Four text elements only: name and role, one sentence, two actions.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="container-page grid items-center gap-10 pb-16 pt-10 sm:pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:gap-12 lg:py-14">
        <div>
          <h1 id="hero-title" className="type-display">
            <span className="block">{profile.name}</span>
            <span className="block">{profile.role}</span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-lede text-muted">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={cta.projects.href}>{cta.projects.label}</ButtonLink>
            <ButtonLink href={cta.contact.href} variant="secondary">
              {cta.contact.label}
            </ButtonLink>
          </div>
        </div>

        <Pipeline />
      </div>
    </section>
  );
}
