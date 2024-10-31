window.onload = () => {
  const fireWorkBtn = document.getElementById("fireWorkBtn");
  const getBlesBtn = document.getElementById("getBlesBtn");
  const blasingsSection = document.getElementById("blasings");
  const fireWorkContainer = document.getElementById("firework-container");
  const blasingsSongCon = document.getElementById("blasingsSong");
  const customNameCon = document.getElementById("custom-name");
  let nameQuery = location.search.split("=")[1];

  nameQuery
    ? (customNameCon.textContent = `s ${nameQuery}`)
    : (customNameCon.textContent = " You");

  getBlesBtn.addEventListener("click", () => {
    const rect = blasingsSection.getBoundingClientRect();
    window.scrollTo(0, rect.y);
  });

  let crackerNum = 1;
  fireWorkBtn.addEventListener("click", (e) => {
    if (crackerNum === 5) crackerNum = 1;
    fireWorkBtn.disabled = true;
    fireWorkContainer.innerHTML = `<img src="./assets/gifs/Cracker ${crackerNum}.gif" alt="Cracker ${crackerNum}" />
                                  <audio src="./assets/sound/Cracker ${crackerNum}.wav" autoplay loop></audio>
  `;

    setTimeout(() => {
      fireWorkContainer.innerHTML = "";
      fireWorkBtn.disabled = false;
    }, 2300);
    crackerNum++;
  });

  const playAudio = (e) => {
    const scrolled = e?.target.scrollingElement.scrollTop || 0;
    const blasingsRect = blasingsSection.getBoundingClientRect();
    if (
      scrolled >= blasingsRect.y &&
      scrolled < blasingsRect.y + blasingsRect.height * 2
    ) {
      if (
        !blasingsSongCon.paused &&
        blasingsSongCon.src.includes("blasings.mp3")
      )
        return;
      blasingsSongCon.src = "./assets/sound/blasings.mp3";
      blasingsSection.volume = 1;
      blasingsSongCon.play();
    } else {
      if (
        !blasingsSongCon.paused &&
        blasingsSongCon.src.includes("happyDiwali.mp3")
      )
        return;
      blasingsSongCon.src = "./assets/sound/happyDiwali.mp3";
      blasingsSongCon.play();
      blasingsSongCon.volume = 0.6;
    }
  };

  document.body.click();
  playAudio();

  document.addEventListener("scroll", playAudio);
};
