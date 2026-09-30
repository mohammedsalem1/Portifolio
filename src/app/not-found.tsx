import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="container-page section-y">
      <h1 className="type-title">Page not found</h1>
      <p className="mt-4 max-w-[34rem] text-lede text-muted">
        There is nothing at this address. The home page has the projects,
        experience and contact details.
      </p>
      <p className="mt-8">
        <ButtonLink href="/">Go to the home page</ButtonLink>
      </p>
    </div>
  );
}
