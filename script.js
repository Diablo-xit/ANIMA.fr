document.addEventListener("DOMContentLoaded", () => {
  const isNewVisitor = localStorage.getItem("alreadyVisited");

  if (!isNewVisitor) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    const closeBtn = document.getElementById("close-alert");

    fetch("https://zenquotes.io/api/random")
      .then(res => res.json())
      .then(data => {
        const quote = data[0].q;
        const author = data[0].a;
        alertMessage.textContent = `🔔 ${quote} — ${author}`;
        alertBox.style.display = "block";
      })
      .catch(() => {
        alertMessage.textContent = "🔔 Bienvenue sur notre site de mangas VF ,le site n'est toujours pas encore achevé soyez les premiers a le tester et n'hésitez pas a nous donner vos avis, 💾dans les commentaires";
        alertBox.style.display = "block";
      });

    closeBtn.addEventListener("click", () => {
      alertBox.style.display = "none";
    });

    localStorage.setItem("alreadyVisited", "yes");
  }
});
let players = [];

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('iframe.video');

  iframes.forEach((iframe, index) => {
    const player = new YT.Player(iframe, {
      videoId: iframe.getAttribute('data-src').split('/').pop(),
      events: {
        'onStateChange': function(event) {
          if (event.data === YT.PlayerState.PLAYING) {
            
            players.forEach((otherPlayer, i) => {
              if (i !== index) {
                otherPlayer.pauseVideo();
              }
            });
          }
        }
      }
    });
    players.push(player);
  });
}


const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(script);





const menutoggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menutoggle.onclick = () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
};