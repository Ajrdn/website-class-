var cup = document.querySelector("#red_cup");
cup.onclick = getPic;

function getPic() {
  alert("현재 이미지 파일 경로는 " + this.src);
}