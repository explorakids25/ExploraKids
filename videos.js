function abrirVideo(url) {
  const overlay = document.getElementById("videoOverlay");
  const iframe = document.getElementById("youtubePlayer");
  
    if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1].split("&")[0];
    url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  } else if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1];
    url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  
  iframe.src = url;
  overlay.style.display = "flex";

    overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      cerrarVideo();
    }
  });
}

function cerrarVideo() {
  const overlay = document.getElementById("videoOverlay");
  const iframe = document.getElementById("youtubePlayer");
  overlay.style.display = "none";
  iframe.src = "";
}

function abrirIframe(url) {
  const overlay = document.getElementById("iframeOverlay");
  const iframe = document.getElementById("miIframe");

  iframe.src = url;
  overlay.style.display = "flex";
}

function cerrarIframe() {
  const overlay = document.getElementById("iframeOverlay");
  const iframe = document.getElementById("miIframe");

  overlay.style.display = "none";
  iframe.src = "";
}

document.getElementById("iframeOverlay").addEventListener("click", cerrarIframe);

const boton = document.getElementById("arriba");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) { 
        boton.classList.add("show"); // Mostrar cuando bajas más de 300px
      } else {
        boton.classList.remove("show"); // Ocultar cuando subes
      }
    });