function handleNo() {
    alert("teri pitai kardungi");
    document.getElementById("noButton").style.display = "none";
  }
  
  function handleYes() {
    document.getElementById("messageContainer").innerHTML = "I love you <3";
    document.getElementById("messageContainer").style.visibility = "visible";
    generateHearts();
    document.getElementById("yesButton").disabled = true;
  }
  
  function generateHearts() {
    const heartsContainer = document.getElementById("heartsContainer");
    
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heartsContainer.appendChild(heart);
      
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
      heart.style.animationDelay = `${Math.random() * 2}s`;
      
      heart.addEventListener('animationend', () => heart.remove());
    }
  }
  
  const style = document.createElement('style');
  style.innerHTML = `
    .heart {
      position: absolute;
      bottom: -10px;
      width: 20px;
      height: 20px;
      background-color: red;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      animation: floatUp 4s ease-in infinite;
      z-index: 1;
    }
  
    @keyframes floatUp {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
