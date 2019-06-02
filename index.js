var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
var ctx = canvas.getContext('2d');
let offset = 0.01;
let change = 0.01;
let movement = 0.1;
function animation() {
	requestAnimationFrame(animation);
	ctx.fillStyle = `rgb(0,125,125)`;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.moveTo(0, canvas.height / 2);
	for (let x = 0; x < canvas.width; x++) {
		ctx.fillStyle = `rgb(125,0,${x / canvas.width * 255})`;
		ctx.fillRect(
			x,
			0,
			1,
			canvas.height / 2 +
				Math.sin(x * 0.001 * offset + movement) * canvas.height / 3 +
				Math.sin(x * 0.0015 * offset + movement) * canvas.height / 6
		);
	}
	ctx.stroke();
	if (offset > 2.55 || offset < -2.55) {
		change = -change;
	}
	offset += change;
	movement += 0.1;
}
animation();
