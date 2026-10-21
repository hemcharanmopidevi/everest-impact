export default function TermsPage() {
  return (
    <article className="prose prose-neutral mx-auto max-w-3xl px-4 py-10 dark:prose-invert">
      <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      <p className="mt-4 text-muted-foreground">
        This is a demo clone of the Everest Impact learning platform. Course access,
        payments, and refunds in a production deployment would be governed by your
        institute&apos;s official terms.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Accounts are personal and non-transferable.</li>
        <li>Course validity starts from the date of purchase.</li>
        <li>Content may not be redistributed or resold.</li>
        <li>Live class schedules can change with prior notice.</li>
      </ul>
    </article>
  );
}
