{
  /* <span class="material-icons" onclick="closeList()">
clear
</span></button> */
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


