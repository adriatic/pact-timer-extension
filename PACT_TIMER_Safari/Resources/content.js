console.log("PACT content injected");
document.body.style.border = "5px solid green";

let activePrompt = null;

function installKeyInterceptor() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      const target = e.target;
      
      // ChatGPT's prompt box is typically a contenteditable div
      // with id="prompt-textarea" or similar
      const isChatGPTPrompt =
        target.id === "prompt-textarea" ||
        target.getAttribute("data-id") === "root" ||
        (target.contentEditable === "true" && target.closest("form"));
      
      if (!isChatGPTPrompt) return;
      
      const text = target.innerText?.trim() || target.textContent?.trim() || "";
      if (!text) return;
      
      console.log("PACT: ChatGPT prompt submitted →", text.substring(0, 40));
      
      activePrompt = {
        id: crypto.randomUUID(),
        submittedAt: performance.now(),
        promptText: text,
      };
    }
  });
}

installKeyInterceptor();

