import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Me",
  description:
    "Hi, I'm Yawar – a software developer who builds reliable systems for healthcare, logistics, and finance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      {/* About Me Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="heading-display text-zinc-900 dark:text-zinc-50">
          About Me
        </h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-lead">
              Hi, I&apos;m Yawar – a software engineer who builds reliable backend systems.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I specialize in building the behind-the-scenes software that powers businesses in healthcare, 
              logistics, and finance. The kind of systems where accuracy matters more than speed, 
              and failures need to be handled gracefully.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              What I enjoy most is solving real operational problems – automating workflows that 
              save teams hours of manual work, building integrations that sync data reliably, 
              and creating tools that non-technical users can trust.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              What I Do
            </h2>
            <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Build secure systems for handling sensitive data (HIPAA, PCI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Create automation that replaces hours of manual data entry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Design fault-tolerant systems with automatic recovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500">✓</span>
                <span>Build dashboards and admin tools for operations teams</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Background & Skills Section */}
      <section className="section-alt border-y border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
                My Background
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I&apos;ve spent years working on systems that handle sensitive 
                information – from patient health records to financial data. 
                I&apos;ve learned that when it comes to important data, getting 
                it right is more important than being fast.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                I build software that can handle problems gracefully. If something 
                goes wrong (and in the real world, things do go wrong), my systems 
                are designed to recover on their own or at least alert someone 
                right away instead of failing silently.
              </p>
            </div>

            <div>
              <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
                Tools I Use
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
                    — Playwright, Celery, scheduled tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mono mt-1 text-sm text-zinc-500">→</span>
                  <span>
                    <strong className="text-zinc-900 dark:text-zinc-50">
                      Data
                    </strong>{" "}
                    — PostgreSQL, Redis, data pipelines
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

      {/* Values Section - Simplified */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
          What I Believe In
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="domain-card">
            <h3>Reliability First</h3>
            <p>
              In healthcare and finance, wrong data causes real problems. 
              I optimize for correctness before speed.
            </p>
          </div>
          <div className="domain-card">
            <h3>Idempotent by Design</h3>
            <p>
              Every operation should be safely retryable. Networks fail, 
              services restart – systems must recover gracefully.
            </p>
          </div>
          <div className="domain-card">
            <h3>Explicit Over Clever</h3>
            <p>
              Code that&apos;s easy to read and debug beats elegant abstractions. 
              Future maintainers will thank you.
            </p>
          </div>
          <div className="domain-card">
            <h3>Fail Loudly</h3>
            <p>
              Silent failures corrupt data. Systems should alert immediately 
              when something isn&apos;t right.
            </p>
          </div>
          <div className="domain-card">
            <h3>Audit Everything</h3>
            <p>
              In regulated industries, you need to prove what happened 
              and when. Comprehensive logging is non-negotiable.
            </p>
          </div>
          <div className="domain-card">
            <h3>Document as You Build</h3>
            <p>
              If it&apos;s not documented, it doesn&apos;t exist. READMEs, 
              comments, and decision logs are essential.
            </p>
          </div>
        </div>
      </section>

      {/* Building Interfaces Section - Simplified */}
      <section className="section-alt border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="heading-section text-zinc-900 dark:text-zinc-50">
            How I Build User Interfaces
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            When I build screens and dashboards for users, I focus on clarity and reliability over flashy features.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">The Server Knows Best</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                All the important checks and rules live on the server. The user interface just displays 
                what the server decides – it doesn&apos;t make its own decisions.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Double-Check Everything</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                While I add helpful form checks for users, the server always does its own verification. 
                Never trust data from the user&apos;s browser alone.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Clarity Over Flash</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Internal tools should be clear and easy to use. No fancy animations just for show – 
                users need to get their work done efficiently.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">Built for Everyday Use</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                The people using these tools use them every day. They need things to work reliably, 
                not to be impressed by fancy designs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
