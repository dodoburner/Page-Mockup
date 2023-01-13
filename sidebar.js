const togglers = document.querySelectorAll(".sidebar-toggler");
const mainContent = document.querySelector(".main-content");
import { data } from "./data.js";

function displaySections(sectionID) {
  // I target the sidebar content node and if it exist remove it from the main section
  const sidebarContentNode = mainContent.children[1];
  if (sidebarContentNode) mainContent.removeChild(sidebarContentNode);

  // I find the section data using the sectionID, create the section and it's content,
  // and I append it to the main section
  const sidebarItemData = data.find((el) => el.id === sectionID);
  const sidebarContent = document.createElement("div");
  sidebarContent.className = `sidebar-content ${sectionID}`;
  const sidebarSections = sidebarItemData.items.map((el) => {
    return `
      <div class="sidebar-section">
        <div class="section-img-container">
          <div class="orange-triangle-bg"></div>
          ${el.logo}
        </div>

        <div class="section-text-container">
          <h2>${el.title}</h2>
          <p>${el.description}</p>
        </div>
      </div>
    `;
  });
  sidebarContent.innerHTML = `
    <h1>${sidebarItemData.name}</h1>
    <div class="sections-container">
      ${sidebarSections.join("")}
    </div>
  `;
  mainContent.appendChild(sidebarContent);
}

displaySections(data[0].id);

togglers.forEach((toggler, index) => {
  const parent = toggler.parentNode;

  toggler.addEventListener("click", () => {
    togglers.forEach((toggler, i) => {
      const parent = toggler.parentNode;
      const list = parent.children[1];
    
      if (i === index) {
        list.classList.remove("hidden");
        toggler.classList.add("active");
      } else {
        list.classList.add("hidden");
        toggler.classList.remove("active");
      }
    })

    // If the clicked sidebar item is not the same as on the sidebar content
    // then display the proper content
    const sidebarContent = document.querySelector('.sidebar-content');
    if (!sidebarContent.classList.contains(parent.id)) {
      displaySections(parent.id)
    }

    if (list.classList.contains("hidden")) {
      toggler.children[0].className = "fa-solid fa-caret-right";
    } else {
      toggler.children[0].className = "fa-solid fa-caret-down";
    }
  });
});
