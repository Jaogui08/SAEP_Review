const tela = document.getElementById("tela");
const caneta = tela.getContext("2d");

caneta.shadowColor = "#00000036";
caneta.shadowBlur = 15;
caneta.shadowOffsetX = 8;
caneta.shadowOffsetY = 8;

let vermelhoBrilhante = caneta.createRadialGradient(110, 85, 5, 125, 100, 65);
vermelhoBrilhante.addColorStop(0, "#FF8A80");
vermelhoBrilhante.addColorStop(1, "#E60000");

caneta.fillStyle = vermelhoBrilhante;
caneta.beginPath();
caneta.arc(125, 100, 65, 0, 2 * Math.PI);
caneta.fill();

let amareloBrilhante = caneta.createRadialGradient(110, 235, 5, 125, 250, 55);
amareloBrilhante.addColorStop(0, "#FFFF99"); 
amareloBrilhante.addColorStop(1, "#FFB300"); 

caneta.fillStyle = amareloBrilhante;
caneta.beginPath();
caneta.arc(125, 250, 55, 0, 2 * Math.PI);
caneta.fill();

let verdeBrilhante = caneta.createRadialGradient(110, 385, 5, 125, 400, 55);
verdeBrilhante.addColorStop(0, "#A1FFB3"); 
verdeBrilhante.addColorStop(1, "#00A82F"); 

caneta.fillStyle = verdeBrilhante;
caneta.beginPath();
caneta.arc(125, 400, 55, 0, 2 * Math.PI);
caneta.fill();