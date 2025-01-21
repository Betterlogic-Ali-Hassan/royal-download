function showLoader(button) {
  const loaderIcon = button.querySelector("svg");

  if (loaderIcon) {
    loaderIcon.classList.remove("loader-hide");
    button.disabled = true;

    setTimeout(() => {
      loaderIcon.classList.add("loader-hide");
      button.disabled = false;
    }, 2000);
  }
}
