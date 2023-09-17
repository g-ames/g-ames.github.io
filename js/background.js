// Create a canvas element
const canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.style.pointerEvents = "auto"; // Allow interactions with elements underneath the canvas
document.body.appendChild(canvas);

// Set canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rest of your code...

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Draw your background or animation on the canvas
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Create falling dots (or any other content you want)
const dotCount = 30;
const dots = [];

for (let i = 0; i < dotCount; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 2,
        speed: Math.random() * 3 + 1,
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the falling dots
    for (const dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        dot.y += dot.speed;

        if (dot.y > canvas.height) {
            dot.y = -dot.radius;
            dot.x = Math.random() * canvas.width;
        }
    }

    // Request animation frame to continue the animation
    requestAnimationFrame(draw);
}

// Start the animation loop
draw();