document.getElementById("url-input").addEventListener("input", function () {
  const urlInput = this.value;
  const errorMsg = document.getElementById("error-message");

  const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;

  if (urlPattern.test(urlInput) || urlInput === "") {
    errorMsg.style.display = "none";
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    errorMsg.style.display = "block";
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
});
