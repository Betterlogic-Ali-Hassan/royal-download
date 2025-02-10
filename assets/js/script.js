// Variables
const selectedAll = document.querySelectorAll(".wrapper-dropdown");
const crossIcons = document.querySelectorAll(".cross-icon");
const tagsContainer = document.getElementById("tags-container");
const radioButtons = document.querySelectorAll('input[name="option"]');
const inputWrapper = document.querySelector(".input-wrapper2");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const items = document.querySelectorAll(".sidebar .nav-link");
const contents = document.querySelectorAll(".main .setting-section");
const addNewBtn = document.querySelector("#add-new");

//Script Add Functions

addNewBtn.addEventListener("click", addScript);
let count = 1;

function addScript() {
  const scriptsContainer = document.getElementById("scripts");

  // Sab scripts ko close kar do
  document.querySelectorAll(".script-container").forEach((script) => {
    script.querySelector(".script-body").style.maxHeight = 0;
    script.querySelector(".script-body").style.opacity = 0;
    script.querySelector(".script-body").style.pointerEvents = "none";
    script.querySelector(".script-edit-bar").classList.remove("active-script");
    script
      .querySelector(".script-wrapper")
      .classList.remove("active-script-container");
  });

  const scriptDiv = document.createElement("div");
  scriptDiv.classList.add("script-container");
  scriptDiv.style.opacity = "0";
  scriptDiv.style.transform = "translateY(-10px)";
  scriptDiv.style.transition = "opacity 1s ease, transform 1s ease";
  scriptDiv.innerHTML = `
    <div class = 'active-script-container script-wrapper'>
    <div class="script-edit-bar active-script">
      <h3 id = "script-title">New Script ${count}</h3>
      <div class="script-bar-actions">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <button class="action-btn edit-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
          </svg>
        </button>
        <button class="action-btn delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="script-body" style="max-height: '1000px'; pointer-events: all; opacity: 1; transition: all 0.5s ease-out; ">
      <input type="text" value="New script ${count}" class="tag-input" id = 'script-input' style="margin-top: 0.8rem" />
      <div class="select-wrapper">
        <input type="text" name="url" id="url" class="tag-input" placeholder="https://example.com" />
        <div class="wrapper-dropdown select-dropdown" id="dropdown">
          <span class="selected-display" id="destination">Whitelist</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="arrow" id="drp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          <ul class="dropdown">
            <li class="item">Blacklist</li>
            <li class="item">Whitelist</li>
          </ul>
        </div>
      </div>
      
      <div class="code-editor">
        <div class="line-numbers" id="line-numbers">
          <span>1</span><br />
        </div>
        <textarea id="code-input" spellcheck="false" placeholder = "New Script 1"></textarea>
      </div>
      <div class = "script-setting-section">
        <div class="select-wrapper">
        <div class="wrapper-dropdown select-dropdown" id="dropdown">
          <span class="selected-display" id="destination">Inject After Page Load</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="arrow" id="drp-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          <ul class="dropdown">
            <li class="item">Inject Before Page Load</li>
            <li class="item">Inject After Page Load</li>
          </ul>
        </div>
    <button class = "save-setting-btn">Save Settings</button>
      </div>
    </div>
    </div>
  `;

  scriptsContainer.appendChild(scriptDiv);
  setTimeout(() => {
    scriptDiv.style.opacity = "1";
    scriptDiv.style.transform = "translateY(0)";
  }, 10);
  count++;

  const editBtn = scriptDiv.querySelector(".edit-btn");
  const scriptBody = scriptDiv.querySelector(".script-body");
  const editBar = scriptDiv.querySelector(".script-edit-bar");
  const scriptWrapper = scriptDiv.querySelector(".script-wrapper");
  const scriptInput = scriptDiv.querySelector("#script-input");
  const scriptTitle = scriptDiv.querySelector("#script-title");
  const savebtn = scriptDiv.querySelector(".save-setting-btn");

  scriptInput.addEventListener("input", () => {
    scriptTitle.textContent = scriptInput.value;
  });
  // Edit button functionality
  editBtn.addEventListener("click", () => {
    const isOpen = scriptBody.style.maxHeight !== "0px";

    document.querySelectorAll(".script-container").forEach((script) => {
      script.querySelector(".script-body").style.maxHeight = "0";
      script.querySelector(".script-body").style.opacity = 0;
      script.querySelector(".script-body").style.pointerEvents = "none";
      script
        .querySelector(".script-edit-bar")
        .classList.remove("active-script");
      script
        .querySelector(".script-wrapper")
        .classList.remove("active-script-container");
    });

    if (!isOpen) {
      scriptBody.style.maxHeight = "1000px";
      scriptBody.style.opacity = 1;
      scriptBody.style.pointerEvents = "all";
      editBar.classList.add("active-script");
      scriptWrapper.classList.add("active-script-container");
    }
  });
  savebtn.addEventListener("click", () => {
    const isOpen = scriptBody.style.maxHeight !== "0px";
    // Sabhi scripts close kar do
    document.querySelectorAll(".script-container").forEach((script) => {
      scriptBody.style.maxHeight = "0";
      scriptBody.style.opacity = 0;
      scriptBody.style.pointerEvents = "none";
      script
        .querySelector(".script-edit-bar")
        .classList.remove("active-script");
      script
        .querySelector(".script-wrapper")
        .classList.remove("active-script-container");
    });

    scriptBody.style.display = isOpen ? "0" : "1000px";
    if (!isOpen) {
      editBar.classList.add("active-script");
    }
    showToast("Setting Saved Successfully");
  });

  // Delete button functionality
  scriptDiv.querySelector(".delete-btn").addEventListener("click", () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this Script?"
    );
    if (confirmDelete) {
      scriptDiv.style.opacity = "0";
      scriptDiv.style.transform = "translateY(-10px)";
      setTimeout(() => scriptDiv.remove(), 300);
      showToast("Setting Saved Successfully");
    }
    if (scriptsContainer.childElementCount === 0) {
      count = 1;
    }
  });
  showToast("Setting Saved Successfully");
}

// Conditional Rendering

items.forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    items.forEach((i) => i.classList.remove("active"));
    // Add active class to the clicked item
    this.classList.add("active");
    // Show the corresponding content
    contents.forEach((content) => content.classList.remove("show-content"));
    contents.forEach((content) => content.classList.add("hide-content"));

    document.getElementById(this.dataset.target).classList.add("show-content");
    document
      .getElementById(this.dataset.target)
      .classList.remove("hide-content");
  });
});
// Theme Apply Settings
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

// Custom Select
// **Dropdown Toggle Handler**
document.addEventListener("click", function (event) {
  let selected = event.target.closest(".wrapper-dropdown");

  if (selected) {
    let arrow = selected.querySelector(".arrow");

    if (selected.classList.contains("active")) {
      handleDropdown(selected, arrow, false);
    } else {
      closeAllDropdowns(); // Close any other open dropdown
      handleDropdown(selected, arrow, true);
    }
  }
});

// **Dropdown Item Selection**
document.addEventListener("click", function (event) {
  if (event.target.matches(".wrapper-dropdown .dropdown .item")) {
    let selected = event.target.closest(".wrapper-dropdown");
    let display = selected.querySelector(".selected-display");

    display.innerHTML = event.target.innerHTML;
    showToast("Setting Saved Successfully");

    handleDropdown(selected, selected.querySelector(".arrow"), false);
  }
});

// **Close dropdown when clicking outside**
window.addEventListener("click", function (event) {
  if (!event.target.closest(".wrapper-dropdown")) {
    closeAllDropdowns();
  }
});

// **Close All Dropdowns**
function closeAllDropdowns() {
  document.querySelectorAll(".wrapper-dropdown.active").forEach((dropdown) => {
    handleDropdown(dropdown, dropdown.querySelector(".arrow"), false);
  });
}

// **Handle Dropdown Open/Close**
function handleDropdown(dropdown, arrow, open) {
  if (open) {
    arrow.classList.add("rotated");
    dropdown.classList.add("active");
  } else {
    arrow.classList.remove("rotated");
    dropdown.classList.remove("active");
  }
}

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

crossIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const alert = icon.closest(".alert");
    if (alert) {
      alert.style.display = "none";
    }
  });
});

radioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    // Check if the selected option is "Custom"
    if (button.value === "Custom" && button.checked) {
      inputWrapper.style.opacity = 1;
      inputWrapper.style.maxHeight = "100vh";
      inputWrapper.style.height = "44px";
      inputWrapper.style.padding = "1rem 0.5rem 1rem 0";
      inputWrapper.style.marginTop = "0.8rem";
    } else {
      inputWrapper.style.opacity = 0;
      inputWrapper.style.maxHeight = 0;
      inputWrapper.style.padding = 0;
      inputWrapper.style.marginTop = 0;
      inputWrapper.style.height = 0;
    }
  });
});

function toggleInput(checkbox) {
  // Get the target input box ID from the data attribute
  const targetId = checkbox.getAttribute("data-target");
  const targetInput = document.getElementById(targetId);

  // Show or hide the input box based on the checkbox state
  if (checkbox.checked) {
    targetInput.style.opacity = 1;
    targetInput.style.maxHeight = "100vh";
    // Check if targetId is "3" and skip marginTop
    if (targetId !== "input3") {
      targetInput.style.marginTop = "0.8rem";
    }
  } else {
    targetInput.style.opacity = 0;
    targetInput.style.maxHeight = 0;
    targetInput.style.marginTop = 0;
  }
}

function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  let foldDirection = "top";

  // Create a new toast div
  const toastId = `toast-${Date.now()}`;
  const toast = document.createElement("div");
  toast.id = toastId;
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
  pillToasts();

  setTimeout(() => {
    toast.remove();
    pillToasts();
  }, 5000);
  toastContainer.addEventListener("mouseover", () => {
    updateTransforms();
  });
  toastContainer.addEventListener("mouseout", () => {
    pillToasts();
  });
  // Close the toast when cross icon is clicked
  const closeButton = toast.querySelector("#cross");
  closeButton.addEventListener("click", () => {
    toast.remove();
    pillToasts();
  });

  function pillToasts() {
    const children = Array.from(toastContainer.children);
    let i = children.length - 1;

    children.forEach((child) => {
      child.style.transform = `translateY(${
        foldDirection === "top" ? 1 - i * 20 : i * 20
      }%) scale(${(100 - 5 * i) / 100})`;
      i--;
    });
  }

  function updateTransforms() {
    const children = Array.from(toastContainer.children);
    let i = children.length - 1;

    children.forEach((child) => {
      child.style.transform = `translateY(${
        foldDirection === "top" ? "-" : ""
      }${i * 110}%) scale(1)`;
      i--;
    });
  }
}

document.addEventListener("change", (event) => {
  const target = event.target;
  if (
    target.type === "checkbox" ||
    target.type === "radio" ||
    target.type === "number" ||
    target.type === "text" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  ) {
    showToast("Setting Saved Successfully");
  }
});

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

initializeDefaultTag("Filename");
switchBoxToggle();
