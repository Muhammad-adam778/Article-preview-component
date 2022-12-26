const sites = document.querySelector(".sites");
const shareBtn = document.querySelector(".share-btn");

shareBtn.onclick = function () {
  sites.classList.toggle("show");
};
