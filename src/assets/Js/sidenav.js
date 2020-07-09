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
