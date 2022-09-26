var userNumber = prompt("숫자를 입력하세요.");

if(userNumber !== null) {
  if(userNumber % 3 == 0) {
    document.write("3의 배수입니다.");
  }
  
  else {
    document.write("3의 배수가 아닙니다.");
  }
}