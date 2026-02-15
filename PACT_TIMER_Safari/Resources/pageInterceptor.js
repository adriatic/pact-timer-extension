console.log("PACT PAGE CONTEXT ACTIVE");

(function () {
  const originalFetch = window.fetch;

  window.fetch = async function (...args) {
    console.log("PACT PAGE: fetch called", args[0]);
    return originalFetch.apply(this, args);
  };
})();
