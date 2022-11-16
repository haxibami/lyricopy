let lyricIdElems = document.querySelectorAll("div[data-lyricid]");
lyricIdElems.forEach((elem) => {
  elem.parentElement.setAttribute("class", "");
});
