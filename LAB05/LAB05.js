let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//quadrado vermelho
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(330,0,70,70);
ctx.closePath();

//quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,70,70);
ctx.closePath();

//texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",200,70);
ctx.closePath();

//quadrado preto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(300,300,100,100)
ctx.closePath();

//quadrado branco do preto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.fillRect(300,300,50,50);
ctx.closePath();

//quadrado amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,300,100,100);
ctx.closePath();

//quadrado branco do amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white'
ctx.fillRect(50,300,50,50);
ctx.closePath();

//quadrado aqua esquerda
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua'
ctx.fillRect(0,158,35,80);
ctx.closePath();

//quadrado aqua direita
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(360,179,40,40);
ctx.closePath();

// Linha verde central (horizontal)
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0, 200);  
ctx.lineTo(400, 200); 
ctx.stroke();
ctx.closePath();

// Linha vertical 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(200,200);
ctx.lineTo(200,400);
ctx.stroke();
ctx.closePath();

//Linha vermelha
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.moveTo(200,200);
ctx.lineTo(400,0);
ctx.stroke();
ctx.closePath();

// Linha Azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ='blue';
ctx.moveTo(200,200);
ctx.lineTo(0,0);
ctx.stroke();
ctx.closePath();

//semi circulo centro
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ='green'
ctx.arc(200,200,80, Math.PI, 2* Math.PI);
ctx.stroke();
ctx.closePath();

//semi circulo da esquerda
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ='green'
ctx.arc(200,200,110, Math.PI, -2.35);
ctx.stroke();
ctx.closePath();

//semi circulo da direita
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ='green'
ctx.arc(200,200,110,-Math.PI / 4, Math.PI / 200);
ctx.stroke();
ctx.closePath();

// Círculo azul claro no centro
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.arc(200, 155, 20, 0, Math.PI * 2); // Círculo completo
ctx.fill();
cpx.strokeStyle = 'blue';
cpx.stroke();
ctx.closePath();

// Círculo amarelo esquerdo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(200, 250, 20, 0, Math.PI * 2); // Círculo completo
ctx.fill();
ctx.closePath();

// Círculo amarelo direito
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(300, 250, 20, 0, Math.PI * 2); // Círculo completo
ctx.fill();
ctx.closePath();

// Quadrado vermelho do meio
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red'
ctx.fillRect(0,158,35,80);
ctx.closePath();