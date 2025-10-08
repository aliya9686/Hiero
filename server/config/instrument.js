import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

export const initSentry = () => {
  Sentry.init({
    dsn: "https://d0b921447192a97a98c9974ccc56cabb@o4510149031428096.ingest.us.sentry.io/4510149043093504",

    profilesSampleRate: 1.0,
    integrations: [nodeProfilingIntegration(), Sentry.mongoIntegration()],
    // tracesSampleRate: 1.0,
  });

  Sentry.profiler.startProfiler();

  console.log("✅ Sentry initialized with profiling and integrations");
};
