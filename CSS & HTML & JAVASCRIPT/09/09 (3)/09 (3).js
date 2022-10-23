var cover = document.getElementById("cover");
cover.addEventListener("mouseover", changePic);
cover.addEventListener("mouseout", function() {
  cover.src = "../../../images/kid-1.jpg";
});

function changePic() {
  cover.src = "../../../images/kid-2.jpg";
}