const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
const selectedAll = document.querySelectorAll(".wrapper-dropdown");
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeRadios = document.querySelectorAll('input[name="theme"]');

  // Function to apply the theme
  const applyTheme = (theme) => {
    if (theme === "Dark Mode") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else if (theme === "Light Mode") {
      body.classList.add("light");
      body.classList.remove("dark");
    } else if (theme === "System") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      body.classList.toggle("dark", prefersDark);
      body.classList.toggle("light", !prefersDark);
    }
    // Save selected theme in localStorage
    localStorage.setItem("selectedTheme", theme);
  };

  // Event listener for radio buttons
  themeRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      applyTheme(event.target.value);
    });
  });

  // Retrieve and apply theme from localStorage
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    applyTheme(savedTheme);
    // Set the radio button to checked based on saved theme
    const matchingRadio = document.querySelector(
      `input[name="theme"][value="${savedTheme}"]`
    );
    if (matchingRadio) matchingRadio.checked = true;
  } else {
    // Apply default theme if nothing is saved
    const checkedRadio = document.querySelector('input[name="theme"]:checked');
    if (checkedRadio) applyTheme(checkedRadio.value);
  }
});
selectedAll.forEach((selected) => {
  const optionsContainer = selected.children[2];
  const optionsList = selected.querySelectorAll("div.wrapper-dropdown li");

  selected.addEventListener("click", () => {
    let arrow = selected.children[1];

    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      let currentActive = document.querySelector(".wrapper-dropdown.active");

      if (currentActive) {
        let anotherArrow = currentActive.children[1];
        handleDropdown(currentActive, anotherArrow, false);
      }

      handleDropdown(selected, arrow, true);
    }
  });

  // update the display of the dropdown
  for (let o of optionsList) {
    o.addEventListener("click", () => {
      selected.querySelector(".selected-display").innerHTML = o.innerHTML;
      showToast("Setting Saved Successfully");
    });
  }
});

// check if anything else ofther than the dropdown is clicked
window.addEventListener("click", function (e) {
  if (e.target.closest(".wrapper-dropdown") === null) {
    closeAllDropdowns();
  }
});

// close all the dropdowns
function closeAllDropdowns() {
  const selectedAll = document.querySelectorAll(".wrapper-dropdown");
  selectedAll.forEach((selected) => {
    const optionsContainer = selected.children[2];
    let arrow = selected.children[1];

    handleDropdown(selected, arrow, false);
  });
}

// open all the dropdowns
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}

// Reference to the tags container
const tagsContainer = document.getElementById("tags-container");

// Add the first tag by default
function initializeDefaultTag(tagName) {
  // Create the default tag element
  const defaultTag = document.createElement("div");
  defaultTag.className = "tag "; // Add a special class for styling
  defaultTag.innerHTML = `
    ${tagName}
  `;

  // Append the default tag to the tags container
  tagsContainer.appendChild(defaultTag);

  // Disable the corresponding button permanently
  document
    .querySelector(`button.tag-btn[onclick="addTag('${tagName}')"]`)
    .setAttribute("disabled", "true");
}
// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="option"]');

// Get the input-wrapper that needs to be shown/hidden
const inputWrapper = document.querySelector(".input-wrapper");

radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    // Check if the selected option is "Custom"
    if (button.value === "Custom" && button.checked) {
      inputWrapper.style.display = "flex"; // Show the input field
    } else {
      inputWrapper.style.display = "none"; // Hide the input field
    }
  });
});

// Function to add a tag
function addTag(tagName) {
  // Check if the tag already exists in the container
  const existingTags = Array.from(tagsContainer.children).map((tag) =>
    tag.textContent.trim()
  );

  if (existingTags.includes(tagName)) return; // Avoid duplicate tags

  // Create a new tag element
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.innerHTML = `
    ${tagName}
    <button class="close-btn" onclick="removeTag(this, '${tagName}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
  `;

  // Append the new tag to the tags container
  tagsContainer.appendChild(tag);

  // Disable the corresponding button
  document
    .querySelector(`button.tag-btn[onclick="addTag('${tagName}')"]`)
    .setAttribute("disabled", "true");
  showToast("Setting Saved Successfully");
}

// Function to remove a tag
function removeTag(button, tagName) {
  // Remove the tag from the tags container
  button.parentElement.remove();

  // Enable the corresponding button
  document
    .querySelector(`button.tag-btn[onclick="addTag('${tagName}')"]`)
    .removeAttribute("disabled");
  showToast("Setting Saved Successfully");
}

function toggleInput(checkbox) {
  // Get the target input box ID from the data attribute
  const targetId = checkbox.getAttribute("data-target");
  const targetInput = document.getElementById(targetId);

  // Show or hide the input box based on the checkbox state
  if (checkbox.checked) {
    targetInput.style.display = "block";
  } else {
    targetInput.style.display = "none";
  }
}
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

const crossIcons = document.querySelectorAll(".cross-icon");

crossIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const alert = icon.closest(".alert");
    if (alert) {
      alert.style.display = "none";
    }
  });
});

function openModal() {
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
}
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");

  // Create a new toast div
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px">
      <span>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
      </span>
      <h5>${message}</h5>
    </div>
    <span class="cross-icon" id="cross">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </span>
  `;

  // Append the toast to the container
  toastContainer.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  // Close the toast when cross icon is clicked
  const closeButton = toast.querySelector("#cross");
  closeButton.addEventListener("click", () => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 500);
  });

  // Auto-hide the toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 500);
  }, 2000);
}

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.type === "checkbox" || target.type === "radio") {
    showToast("Setting Saved Successfully");
  }
});
// Select all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    // Get the label associated with the checkbox
    const label = event.target.closest(".checkbox");

    // Add or remove the 'checked' class based on whether the checkbox is checked
    if (event.target.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  });
});

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal());
closeBtn.addEventListener("click", closeModal);

initializeDefaultTag();
switchBoxToggle();
