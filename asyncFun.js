// asycFun_class
function asycFun(targetElement, addClass) {
  let classCode = document.querySelector(targetElement);
  setTimeout(() => {
    classCode.classList.add(addClass);
  }, 500);
}
asycFun('#asyncClass', 'BGI');
// asycFun_code
function asycFun_code(objs) {
  let Elemets = document.querySelector(objs.ClassNames);
  setTimeout(() => {
    Elemets.innerHTML = objs.template;
  }, 500);
}
asycFun_code({
 ClassNames:'.Asyncimg',
 template:`
 <figure>
<img src="./src/assets/img/logo.png" alt="" srcset="" class="img-fluid will_only_mobile" width="260">
</figure>`
});
