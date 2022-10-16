let side_menu = document.getElementById('side_menu');
let header = document.getElementById('header');
let side_menu_list = document.querySelectorAll('.side_menu')[0].children;

// light mode and save to local storage
window.onload = function () {
  if (localStorage.lightMode == 'true') {
    document.body.classList.toggle('body-light');
    document.getElementById('checkbox').checked = true;
  } else {
    document.body.classList.toggle('body');
  }
};
document.getElementById('checkbox').addEventListener('change', () => {
  document.body.classList.toggle('body-light');
  localStorage.lightMode = localStorage.lightMode == 'true' ? 'false' : 'true';
});

let pointer = document.createElement('span');
pointer.innerHTML = `<a href='#skills' class='pointer'>╲╱<a>`;

header.appendChild(pointer);

const open_menu = () => {
  side_menu.style.right = '0';
};

const close_menu = () => {
  side_menu.style.right = '-20rem';
};

// close side menu onclick link
// for (let i = 0; i < side_menu_list.length; i++) {
//   console.log(side_menu_list[i]);
//   side_menu_list[i].addEventListener('click', () => {
//     side_menu.style.right = '-20rem !important';
//   });
// }

// close side menu on click outside
window.addEventListener('mouseup', function (e) {
  if (e.target != side_menu && e.target.parentNode != side_menu) {
    side_menu.style.right = '-20rem';
  }
});
