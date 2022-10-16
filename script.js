let side_menu = document.getElementById('side_menu');
let side_menu_list = document.querySelectorAll('.side_menu')[0].children;

const open_menu = () => {
  side_menu.style.right = '0';
};

const close_menu = () => {
  side_menu.style.right = '-250px';
};

for (let i = 0; i < side_menu_list.length; i++) {
  side_menu_list[i].addEventListener('click', () => {
    side_menu.style.right = '-200px';
  });
}

// light mode and save to local storage
window.onload = function () {
  if (localStorage.lightMode == 'true') {
    document.body.classList.toggle('body-light');
    document.getElementById('checkbox').checked = true;
  } else {
    document.body.classList.toggle('');
  }
};
document.getElementById('checkbox').addEventListener('change', () => {
  document.body.classList.toggle('body-light');
  localStorage.lightMode = localStorage.lightMode == 'true' ? 'false' : 'true';
});
