const textarea = document.getElementById("code-input");
const lineNumbers = document.getElementById("line-numbers");

// Function to update line numbers
function updateLineNumbers() {
  const lines = textarea.value.split("\n").length;
  lineNumbers.innerHTML = Array(lines)
    .fill("<span></span>")
    .map((_, i) => `<span>${i + 1}</span><br>`)
    .join("");
}

// Update line numbers on input
textarea.addEventListener("input", updateLineNumbers);

// Sync scrolling of line numbers with textarea
textarea.addEventListener("scroll", () => {
  lineNumbers.scrollTop = textarea.scrollTop;
});

// Auto-indentation on pressing Enter
textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    // Get the current line
    const currentLine = value.substring(0, start).split("\n").pop();
    const indentation = currentLine.match(/^\s*/)[0]; // Match leading spaces

    // Insert a newline and the same indentation
    textarea.value =
      value.substring(0, start) + "\n" + indentation + value.substring(end);
    textarea.selectionStart = textarea.selectionEnd =
      start + 1 + indentation.length;

    // Update line numbers
    updateLineNumbers();
  }
});

// Initialize line numbers
updateLineNumbers();
