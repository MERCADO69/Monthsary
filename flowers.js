const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');
let flowers = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createFlower() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: Math.random() * 10 + 10,
    speed: Math.random() * 1 + 0.5,
    angle: Math.random() * Math.PI * 2
  };
}

function drawFlower(flower) {
  ctx.beginPath();
  ctx.fillStyle = 'pink';
  ctx.arc(flower.x, flower.y, flower.size, 0, Math.PI * 2);
  ctx.fill();
}

function updateFlowers() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (flowers.length < 100) {
    flowers.push(createFlower());
  }

  for (let i = 0; i < flowers.length; i++) {
    const f = flowers[i];
    f.y -= f.speed;
    f.x += Math.sin(f.angle) * 0.5;

    drawFlower(f);

    if (f.y < -20) {
      flowers[i] = createFlower();
    }
  }

  requestAnimationFrame(updateFlowers);
}

updateFlowers();
