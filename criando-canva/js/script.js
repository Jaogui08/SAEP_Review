const tela = document.getElementById("minhaTela");
const caneta = tela.getContext("2d");

caneta.fillStyle = "black";
caneta.fillRect(50, 50, 100, 100);

caneta.fillStyle = "red";
caneta.beginPath();
caneta.arc(200, 200, 50, 0, 2 * Math.PI);
caneta.fill();

caneta.fillStyle = "orange";
caneta.beginPath();
caneta.moveTo(300, 300);
caneta.lineTo(150, 150);
caneta.lineTo(50, 150);
caneta.closePath();
caneta.fill();