async function initMocks() {
  if (typeof window !== "undefined") {
    const { worker } = await import("./browser");
    worker.start();
  }
}

if (process.env.NEXT_PUBLIC_MOCK === "true") initMocks();

export {};
