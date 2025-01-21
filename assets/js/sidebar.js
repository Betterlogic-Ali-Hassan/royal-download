const sidebar = `
   <div>
        <aside class="sidebar">
          <div class="sidebar-wrapper">
            <div class="logo-wrapper">
              <img
                src="https://royal-downloader.netlify.app/_next/image?url=%2Flogo2.webp&w=48&q=75"
                alt="Royal Downloader logo"
                width="40px"
                height="40px"
                style="color: transparent"
              />
              <div>
                <h3>Royal Downloader</h3>
                <p class="desc">Updated: August 7, 2024</p>
              </div>
            </div>
            <nav>
              <ul class="list">
                <li>
                  <a href="./index.html" class="nav-link"
                    ><span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 -960 960 960"
                      >
                        <path
                          d="M459.27-144.92V-340.5h36.92v79.27h319.39v36.92H496.19v79.39zm-314.96-79.39v-36.92h198.04v36.92zm161.11-158.65v-78.89H144.31v-36.92h161.11v-79.38h36.93v195.19zm153.85-78.89v-36.92h356.31v36.92zm158.27-158.77v-195.57h36.92v79.38h161.12v36.93H654.46v79.26zm-473.23-79.26v-36.93h356.31v36.93z"
                        ></path></svg></span
                    ><span class="label">General Settings</span></a
                  >
                </li>
                <li>
                  <a href="./videodownload.html" class="nav-link"
                    ><span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 576 512"
                      >
                        <path
                          d="M320 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm352 290.4 103.4 56.9c5.6 3.1 12 4.7 18.4 4.7 21.1 0 38.2-17.1 38.2-38.2V134.2c0-21.1-17.1-38.2-38.2-38.2-6.4 0-12.8 1.6-18.4 4.7L416 157.6v36.5l118.8-65.4c.9-.5 1.9-.8 3-.8 3.4 0 6.2 2.8 6.2 6.2v243.6c0 3.4-2.8 6.2-6.2 6.2-1 0-2.1-.3-3-.8L416 317.9zM224 352c8.8 0 16-7.2 16-16s-7.2-16-16-16h-73.4l132.7-132.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L128 297.4V224c0-8.8-7.2-16-16-16s-16 7.2-16 16v112c0 8.8 7.2 16 16 16z"
                        ></path></svg></span
                    ><span class="label">Video Download</span></a
                  >
                </li>
                <li>
                  <a href="./audioDownload.html" class="nav-link"
                    ><span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M512 23c0-12.7-10.3-23-23-23-2.3 0-4.6.3-6.8 1l-311 95.7C164.6 98.8 160 105 160 112v260.4c-17-12.7-39.4-20.4-64-20.4-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V246.3l288-88.6v150.7c-17-12.7-39.4-20.4-64-20.4-53 0-96 35.8-96 80s43 80 96 80 96-35.8 96-80V23m-32 345c0 21.3-22.9 48-64 48s-64-26.7-64-48 22.9-48 64-48 64 26.7 64 48m-320 64c0 21.3-22.9 48-64 48s-64-26.7-64-48 22.9-48 64-48 64 26.7 64 48m320-307.8-288 88.6v-89l288-88.6z"
                        ></path></svg></span
                    ><span class="label"
                      >Audio Downloads &amp; Conversion</span
                    ></a
                  >
                </li>
                <li>
                  <a href="./imageDownload.html" class="nav-link"
                    ><span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 -960 960 960"
                      >
                        <path
                          d="M204.37-144.27q-24.51 0-42.31-17.79-17.79-17.8-17.79-42.31v-551.26q0-24.51 17.79-42.31 17.8-17.79 42.31-17.79h551.26q24.51 0 42.31 17.79 17.79 17.8 17.79 42.31v551.26q0 24.51-17.79 42.31-17.8 17.79-42.31 17.79zm.09-47.88h551.08q4.61 0 8.46-3.85t3.85-8.46v-551.08q0-4.61-3.85-8.46t-8.46-3.85H204.46q-4.61 0-8.46 3.85t-3.85 8.46v551.08q0 4.61 3.85 8.46t8.46 3.85m67.44-97.79h420.42L564.38-460.1 447.33-310.09 366.8-413.88zm-79.75 97.79v-575.7z"
                        ></path></svg></span
                    ><span class="label">Image Download</span></a
                  >
                </li>
                <li>
                  <a
                    class="nav-link"
                    href="./filename.html"
                    ><span
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 -960 960 960"
                      >
                        <path
                          d="M452.12-108.08v-214.04h55.96v78.89h304.65v55.96H508.08v79.19zm-304.85-79.19v-55.96h221.19v55.96zm135.46-205.04h58.89l42.37-119.92h192.33l42.06 119.92h59.08L507.58-851.92h-54.96zm119.12-170.23L478-777.77h4l76.15 215.23z"
                        ></path></svg></span
                    ><span class="label">File Naming Settings</span></a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
`;

// Inject the sidebar HTML
document.getElementById("sidebar").innerHTML = sidebar;

const currentPage = window.location.pathname.split("/").pop(); // Get current file name
console.log(currentPage);
const navLinks = document.querySelectorAll(".nav-link");

let isActiveSet = false; // Track if active class is set

navLinks.forEach((link) => {
  if (link.getAttribute("href") === `./${currentPage}`) {
    link.classList.add("active"); // Add active class to the current link
    isActiveSet = true;
  }
});

// If no active link is found, set the first link as active
if (!isActiveSet) {
  navLinks[0].classList.add("active");
}
