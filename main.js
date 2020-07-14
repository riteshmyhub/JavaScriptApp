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

// --------------render for topic list -----------------
export default class GetTopicList {
  constructor(ListObj) {
    this.ListObj = ListObj;
  }
  listing(id) {
    for (let i = 0; i < this.ListObj.length; i++) {
      let temp = document.querySelector(id);
      temp.innerHTML += `<a class="nav-link mb-2" onclick="closeList()" data-toggle="tab" href="#tab${i + 1}">${this.ListObj[i].name}</a>`;
    }
  }
}
