const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ctx.strokeStyle = "#BADA55";
ctx.globalCompositeOperation = 'hue';
ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.lineWidth = '50';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = false;
ctx.lineWidth = 10;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    if (e.offsetX > 0) {
        ctx.lineTo(e.offsetX, e.offsetY);
        [lastX, lastY] = [e.offsetX, e.offsetY];
    } else if (e.touches[0].clientX) {
        e.preventDefault();
        ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
        [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
    }
    ctx.stroke();
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 30 || ctx.lineWidth <= 10) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
});
canvas.addEventListener("touchend", () => (isDrawing = false));
canvas.addEventListener("touchcancel", () => (isDrawing = false));

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
