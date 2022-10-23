var myRect = document.querySelector("#rect");
myRect.addEventListener("mouseover", makeBorder);
myRect.addEventListener("mouseout", removeBorder);

function makeBorder() {
  myRect.style.backgroundColor = "green";
  myRect.style.borderRadius = "50%";
}

function removeBorder() {
  myRect.style.backgroundColor = "";
  myRect.style.borderRadius = "";
}