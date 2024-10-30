const fireWorkBtn = document.getElementById("fireWorkBtn");
const getBlesBtn = document.getElementById("getBlesBtn");
const blasingsSection = document.getElementById("blasings");
const fireWorkContainer = document.getElementById("firework-container");

getBlesBtn.addEventListener("click", () => {
  const rect = blasingsSection.getBoundingClientRect();
  window.scrollTo(0, rect.y);
});

let crackerNum = 1;
fireWorkBtn.addEventListener("click", () => {
  if (crackerNum === 5) crackerNum = 1;
  fireWorkContainer.style.opacity = 1;
  fireWorkContainer.innerHTML = `<img src="./assets/gifs/Cracker ${crackerNum}.gif" alt="Cracker ${crackerNum}" />`;
  setTimeout(() => {
    fireWorkContainer.style.opacity = 0;
  }, 2500);
  crackerNum++;
});
