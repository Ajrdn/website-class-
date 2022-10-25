function newRegister() {
  var newItem = document.createElement("li");
  var subject = document.querySelector("#subject");
  var newText = document.createTextNode(subject.value);

  newItem.appendChild(newText);
  var itemList = document.querySelector("#itemList");

  itemList.insertBefore(newItem, itemList.childNodes[0]);

  subject.value="";

  var items = document.querySelectorAll("li");
  for(let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
      if(this.parentNode)
        this.parentNode.removeChild(this);
    });
      }
}