import { ButtonLink } from "@/components/ui/button";
import { getDictionary } from "@/i18n/dictionaries";

// Rendered for notFound() inside a locale. The locale is not passed to
// not-found files, so this page is bilingual.
export default function NotFound() {
  const en = getDictionary("en");
  const ar = getDictionary("ar");

  return (
    <div className="container-page section-y">
      <p className="type-code text-accent-ink">
        404
      </p>
      <h1 className="type-title mt-3">{en.notFound.title}</h1>
      <p className="mt-4 max-w-[34rem] text-lede text-muted">{en.notFound.body}</p>
      <p lang="ar" dir="rtl" className="mt-4 max-w-[34rem] text-lede text-muted">
        {ar.notFound.body}
      </p>
      <p className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/en">{en.cta.home}</ButtonLink>
        <ButtonLink href="/ar" variant="secondary">
          <span lang="ar">{ar.cta.home}</span>
        </ButtonLink>
      </p>
    </div>
  );
}
