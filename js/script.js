document.querySelector(".btn__right").addEventListener("click", collapse);

function collapse(){
  this.parentElement.parentElement.classList.toggle("collapse__left");
  this.parentElement.parentElement.previousElementSibling.classList.toggle("collapse__right");
  setTimeout(() => {
    changeTitleRight();
    changeTitleLeft();
    addInput();
    changeHead();
    changeButtonContent();
  }, 145);
}

function changeTitleRight(){
  document.querySelector(".content__title__right").children[0].classList.toggle("add");
  document.querySelector(".content__title__right").children[1].classList.toggle("replace");
}

function changeTitleLeft(){
  document.querySelector(".content__title__left").children[0].classList.toggle("add");
  document.querySelector(".content__title__left").children[1].classList.toggle("replace");
}

function addInput(){
  document.querySelector(".mdp__forget").children[0].classList.toggle("add");
  document.querySelector(".mdp__forget").children[1].classList.toggle("visible");
}

function changeHead(){
  document.querySelector(".coordonnee").classList.toggle("add");
  document.querySelector(".inscription").classList.toggle("visible");
}

function changeButtonContent(){
  document.querySelector(".button").children[0].classList.toggle("add");
  document.querySelector(".button").children[1].classList.toggle("visible");
}
