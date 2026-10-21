import Link from "next/link";

const links = [
  { title: "All Courses", href: "/courses" },
  { title: "Live Courses", href: "/courses?category=Live%20Courses" },
  { title: "Recorded Courses", href: "/courses?category=Recorded%20Courses" },
  { title: "Test Series", href: "/test-series" },
  { title: "AI Doubt Solver", href: "/ai-doubt" },
  { title: "Study Planner", href: "/planner" },
  { title: "Wishlist", href: "/wishlist" },
  { title: "Result Dashboard", href: "/dashboard" },
];

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Quick Links</h1>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition hover:bg-accent"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
