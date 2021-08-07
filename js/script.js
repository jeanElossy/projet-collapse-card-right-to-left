document.querySelector(".btn__right").addEventListener("click", collapse);

function collapse(){
  this.parentElement.parentElement.classList.toggle("collapse__l");
  this.parentElement.parentElement.previousElementSibling.classList.toggle("collapse__r");

  setTimeout(() => {
    changeTitleRight();
    changeTitleLeft();
    addInput();
    changeHead();
    changeButtonContent();
  }, 150);
}

function changeTitleRight(){
  document.querySelector(".content__title__right").innerHTML = `<h2>Welcome Back!</h2>`;
}
function changeTitleLeft(){
  document.querySelector(".content__title__left").innerHTML = `<h2>Create Account</h2>`;
}
function addInput(){
  document.querySelector(".mdp__forget").innerHTML = `<input type="text" name="pseudo" id="pseudo" placeholder="Pseudo" required><br />`;
}
function changeHead(){
  document.querySelector(".coordonnee").textContent = "Inscription";
}
function changeButtonContent(){
  document.querySelector("button").textContent = "S'inscrire";
}