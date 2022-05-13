const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting() {
  painting = false;
}

function onMousMove(event) {
  //   console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMousDown(event) {
  painting = true;
}
function onMousUp(event) {
  //   painting = false;
  stopPainting();
}
function onMousLeave(event) {
  painting = false;
}
if (canvas) {
  canvas.addEventListener('mousemove', onMousMove);
  canvas.addEventListener('mousedown', onMousDown);
  canvas.addEventListener('mouseup', onMousUp);
  canvas.addEventListener('mouseleave', stopPainting);
  //   canvas.addEventListener('mouseleave', onMousLeave);
}
