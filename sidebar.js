const togglers = document.querySelectorAll('.sidebar-toggler');

togglers.forEach((toggler) => {
  const parent = toggler.parentNode;
  const list = parent.children[1];

  toggler.addEventListener('click', () => {
    list.classList.toggle('hidden');
    toggler.classList.toggle('active');
    if (list.classList.contains('hidden')) {
      toggler.children[0].className = "fa-solid fa-caret-right";
    } else {
      toggler.children[0].className = "fa-solid fa-caret-down";
    }
  })
})