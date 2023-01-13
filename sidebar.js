const togglers = document.querySelectorAll(".sidebar-toggler");
const mainContent = document.querySelector(".main-content");
import { data } from "./data.js";

// const activeToggler = [...togglers].find((el) =>
//   el.classList.contains("active")
// );
// const sidebarData = data.find((el) => {
//   const parent = activeToggler.parentNode;
//   console.log(parent.id)
//   return parent.id === el.id;
// });

// const sidebarContent = document.createElement("div");
// sidebarContent.innerHTML = `
//   <h1>${sidebarData.name}</h1>
//   ${sidebarData.items.map((el) => {
//     return `
//       <div>
//         <h3>${el.title}</h3>
//         <p>${el.description}</p>
//       </div>
//     `;
//   })} 
// `;

// mainContent.appendChild(sidebarContent);

togglers.forEach((toggler) => {
  const parent = toggler.parentNode;
  const list = parent.children[1];

  toggler.addEventListener("click", () => {
    list.classList.toggle("hidden");
    toggler.classList.toggle("active");
    if (list.classList.contains("hidden")) {
      toggler.children[0].className = "fa-solid fa-caret-right";
    } else {
      toggler.children[0].className = "fa-solid fa-caret-down";
    }
  });
});
