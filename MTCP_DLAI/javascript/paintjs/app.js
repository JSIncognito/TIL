const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMousMove(event) {
  //   console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMousDown(event) {
  painting = true;
}

// function onMousUp(event) {
//   //   painting = false;
//   stopPainting();
// }

function onMousLeave(event) {
  painting = false;
}
if (canvas) {
  canvas.addEventListener('mousemove', onMousMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  //   canvas.addEventListener('mouseleave', onMousLeave);
}
