const text = "Allison, este amor es eterno 💖";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();


function promesa() {
  alert(
    "Prometo cuidarte, respetarte y amarte.\n" +
    "Prometo elegirte incluso en la distancia.\n" +
    "Prometo que este amor es para siempre.\n\n" +
    "— Luz 💕"
  );
}


function playMusic() {
  const audio = document.getElementById("musica");
  audio.volume = 0.7;
  audio.play().catch(e => {
    alert("Toca una vez más la pantalla 💕");
  });
}


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

function mostrarSecreto() {
  document.getElementById("mensajeSecreto").style.display = "block";
}
