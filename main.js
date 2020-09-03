// --------------render for topic list -----------------
export default class GetTopicList {
  constructor(ListObj) {
    this.ListObj = ListObj;
  }
  listing(id) {
    for (let i = 0; i < this.ListObj.length; i++) {
      let temp = document.querySelector(id);
      temp.innerHTML += `<a class="nav-link mb-2" onclick="closeList()" data-toggle="tab" href="#tab${
        i + 1
      }">${i + 1} _${this.ListObj[i].name}</a>`;
    }
  }
}

