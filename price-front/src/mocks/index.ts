async function initMocks() {
  if (typeof window === "undefined") {
    // console.log("msw hosted");
    // const { server } = await import("./server");
    // server.listen();
  } else {
    console.log("msw running");
    const { worker } = await import("./browser");
    worker.start();
  }
}

initMocks();

export {};
