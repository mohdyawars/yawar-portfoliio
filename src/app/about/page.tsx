import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "How I Work",
  description:
    "My approach to building reliable backend systems. Principles, process, and what I prioritize.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="heading-display text-zinc-900 dark:text-zinc-50">
          How I Work
        </h1>
        <p className="text-lead mt-4 max-w-2xl">
          My approach to building systems that work correctly the first time and
          every time after.
        </p>
      </section>

      <section className="section-alt border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
                Background
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I&apos;m a backend engineer focused on building reliable,
                production-grade systems. I work primarily on healthcare
                automation, RPA pipelines, and data processing systems where
                correctness matters more than speed.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I&apos;ve spent years working on systems that handle sensitive
                data, automate complex workflows, and process documents at
                scale. The common thread: systems that fail gracefully and
                recover automatically.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
                Core Technologies
              </h2>
              <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Python
                    </strong>{" "}
                    — Django, FastAPI, async programming
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Automation
                    </strong>{" "}
                    — Playwright, Celery, task queues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Data
                    </strong>{" "}
                    — PostgreSQL, Redis, ETL pipelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Cloud
                    </strong>{" "}
                    — GCP, Docker, containerized deployments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Frontend
                    </strong>{" "}
                    — React, Angular (internal tools & dashboards)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
          Principles
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="domain-card">
            <h3>Correctness Over Speed</h3>
            <p>
              In healthcare and finance, wrong data is worse than slow data. I
              optimize for reliability first.
            </p>
          </div>
          <div className="domain-card">
            <h3>Idempotency by Default</h3>
            <p>
              Every operation should be safely retryable. Networks fail,
              services restart, tasks need to recover.
            </p>
          </div>
          <div className="domain-card">
            <h3>Explicit Over Clever</h3>
            <p>
              Code that&apos;s easy to read and debug beats elegant abstractions.
              Future-you will thank present-you.
            </p>
          </div>
          <div className="domain-card">
            <h3>Fail Loudly</h3>
            <p>
              Silent failures corrupt data. Systems should fail fast and alert
              immediately when something&apos;s wrong.
            </p>
          </div>
          <div className="domain-card">
            <h3>Audit Everything</h3>
            <p>
              In regulated industries, you need to answer &quot;what happened
              and when&quot; months later. Log accordingly.
            </p>
          </div>
          <div className="domain-card">
            <h3>Documentation as Code</h3>
            <p>
              If it&apos;s not documented, it doesn&apos;t exist. READMEs,
              comments, and decision logs are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-alt border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
            Frontend Philosophy
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            When I build frontend interfaces, they serve the backend—not the other way around.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Backend is the Source of Truth</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                All validation, permissions, and business logic live on the server. The frontend displays state—it doesn&apos;t determine it.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Frontend Validates, Never Assumes</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Client-side validation improves UX but never replaces server checks. Never trust the client.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Prefer Boring, Predictable UI</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Internal tools should be clear and functional. No animations for their own sake. Clarity over cleverness.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Optimize for Operators, Not Demos</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                The people using these tools need efficiency and reliability. They don&apos;t need to be impressed—they need to get work done.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
