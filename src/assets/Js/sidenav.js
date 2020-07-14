//__________nav bar functionality___________________
const NavElement = {
  close_btn: document.querySelector('.closed'),
  open_btn: document.querySelector('#open'),
  side_bar: document.querySelector('.nav_side'),
  logimg: document.querySelector('.side_logo'),
};

NavElement.open_btn.addEventListener('click', Nopen);
NavElement.close_btn.addEventListener('click', Nclose);

function Nopen() {
  NavElement.side_bar.classList.remove('nav_side');
  NavElement.side_bar.classList.add('nav_side_remove');
}
function Nclose() {
  NavElement.side_bar.classList.add('nav_side');
  NavElement.side_bar.classList.remove('nav_side_remove');
}

var x = window.matchMedia('(max-width: 700px)');
if (x.matches) {
  // If media query matches
  function openList() {
    let list_Box = document.querySelector('.list_box');
    list_Box.style.display = 'block';
  }
  function closeList() {
    let list_Box = document.querySelector('.list_box');
    list_Box.style.display = 'none';
  }
} else {
}
