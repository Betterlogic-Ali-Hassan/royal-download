document.addEventListener("DOMContentLoaded", () => {
  const scriptsContainer = document.getElementById("scripts");

  function updateLineNumbers(textarea) {
    const scriptDiv = textarea.closest(".script-container");
    const lineNumbers = scriptDiv.querySelector(".line-numbers");
    const lines = textarea.value.split("\n").length;

    lineNumbers.innerHTML = Array(lines)
      .fill("<span></span>")
      .map((_, i) => `<span>${i + 1}</span><br>`)
      .join("");
  }

  scriptsContainer.addEventListener("input", (event) => {
    if (event.target.classList.contains("code-input")) {
      updateLineNumbers(event.target);
    }
  });

  scriptsContainer.addEventListener("scroll", (event) => {
    if (event.target.classList.contains("code-input")) {
      const textarea = event.target;
      const scriptDiv = textarea.closest(".script-container");
      const lineNumbers = scriptDiv.querySelector(".line-numbers");
      lineNumbers.scrollTop = textarea.scrollTop;
    }
  });

  scriptsContainer.addEventListener("keydown", (event) => {
    if (event.target.classList.contains("code-input") && event.key === "Enter") {
      event.preventDefault();
      const textarea = event.target;
      const scriptDiv = textarea.closest(".script-container");
      const lineNumbers = scriptDiv.querySelector(".line-numbers");

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;

      const currentLine = value.substring(0, start).split("\n").pop();
      const indentation = currentLine.match(/^\s*/)[0];

      textarea.value =
        value.substring(0, start) + "\n" + indentation + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd =
        start + 1 + indentation.length;

      updateLineNumbers(textarea);
    }
  });

  // Update line numbers for existing textareas on page load
  document.querySelectorAll(".code-input").forEach((textarea) => {
    updateLineNumbers(textarea);
  });
});
