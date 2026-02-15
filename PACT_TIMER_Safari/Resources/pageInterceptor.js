console.log("PACT PAGE CONTEXT ACTIVE");

(function () {
  let lastPromptTime = null;

  // 🔹 Listen for prompt submission signal from content script
  window.addEventListener("message", (event) => {
    if (event.data?.type === "PACT_PROMPT_SUBMITTED") {
      lastPromptTime = performance.now();
      console.log("PACT: Prompt timestamp recorded");
    }
  });

  // 🔹 Intercept WebSocket
  const OriginalWebSocket = window.WebSocket;

  window.WebSocket = function (url, protocols) {
    console.log("PACT: WebSocket created →", url);

    const socket = new OriginalWebSocket(url, protocols);

    socket.addEventListener("message", () => {
      if (!lastPromptTime) return;

      const delta = performance.now() - lastPromptTime;

      console.log(
        "PACT: First LLM token after",
        delta.toFixed(1),
        "ms"
      );

      // reset so we only measure once per prompt
      lastPromptTime = null;
    });

    return socket;
  };
})();

