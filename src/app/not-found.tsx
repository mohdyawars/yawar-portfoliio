import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Page not found
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Sorry, I couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
