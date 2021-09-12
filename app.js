const canvas =  document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
// getElementsByClassName으로 받으면 HTMLElement??로 받아와서 Array.from에 넣어서 배열로 만들어줘야하는데,
// querySelectorAll로 받아오면 바로 배열로 출력해준다는 회원의 얘기가 있다.

// canvas.width = 700;
// canvas.height = 700;
// 혹은 캔버스에 선 그릴때 이상하게 그려지면
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
// 이렇게 하시면 된다고하는 유저가 있다.
// width, height 값에 700, 700 주면 오류 생길 여지가 있으므로?? 캔버스 크기를 가져오면 됩니다 라고하네

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  // console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  // console.log(x,y);
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    // console.log("creating path in ", x, y);
  } else {
    // console.log("creating line in ", x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// function onMouseDown(event) {
//   // console.log(event);
//   painting = true;
// }

// function onMouseUp(event) {
//   stopPainting();
// }

// function onMouseLeave(event) {
//   stopPainting();
// }

function handleColorClick(event) {
  // console.log(event.target.style);
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  // canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mousedown", startPainting);
  // canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseup", stopPainting);
  // canvas.addEventListener("mouseleave", onMouseLeave);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

console.log(Array.from(colors));