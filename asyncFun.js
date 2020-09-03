function name(targetElement,addClass) {
  let classCode = document.querySelector(targetElement);
  setTimeout(() => {
    classCode.classList.add(addClass);
  }, 500);
}
name('#asyncClass','BGI');
