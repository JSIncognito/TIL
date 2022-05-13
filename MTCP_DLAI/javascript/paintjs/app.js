const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

ctx.lineWidth = 2.5;
// ctx.filStyle = 'green';
// ctx.fillRect(50, 20, 100, 49);
// ctx.fillStyle = 'purple';
// ctx.fillRect(80, 100, 100, 49);

let painting = false;
let filling = false;

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

// function onMousDown(event) {
//   painting = true;
// }

// function onMousUp(event) {
//   //   painting = false;
//   stopPainting();
// }

function onMousLeave(event) {
  painting = false;
}

function handleColorClick(event) {
  //console.log('handle ColorClick >> ', event.target.style);
  const color = event.target.style.backgroundColor;
  //   console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  // console.log(event);
  if (filling === true) {
    filling = false;
    mode.innerText = 'FILL';
  } else {
    filling = true;
    mode.innerText = 'PAINT';
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMousMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);
  //   canvas.addEventListener('mouseleave', onMousLeave);
}

// console.log(Array.from(colors));
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick)
);

if (range) {
  range.addEventListener('input', handleRangeChange);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}
