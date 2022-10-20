function openCenter(doc, win, w, h) {
  var left = (screen.availWidth - w) / 2;
  var top = (screen.availHeight - h) / 2;
  var opt = "left = " + left + ", top = " + top + ", width = " + w + ", height = " + h;
  window.open(doc, win, opt);
}

openCenter("8day (2) - 2.html", "name", 500, 400);