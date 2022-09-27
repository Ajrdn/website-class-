var numberOne = prompt("첫 번째 숫자를 입력하세요.");
var numberTwo= prompt("두 번째 숫자를 입력하세요.");

if(numberOne !== null && numberTwo !== null) {
  if(numberOne < 10 || numberTwo < 10) {
    document.write("둘 중의 하나가 10보다 작습니다.");
  }
  else {
    document.write("10보다 작은 숫자가 없습니다.");
  }
}