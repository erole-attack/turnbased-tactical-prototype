<script>
	import P5 from 'p5-svelte';

	const squareSide = 30;

	const sketch = (p5) => {
		p5.setup = () => {
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
		};

		p5.draw = () => {
			for (let x = 1; x < 21; x++) {
				for (let y = 1; y < 21; y++) {
					selectSquare(x, y);
					p5.square(squareSide * x, squareSide * y, squareSide);
				}
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
		};

		const selectSquare = (x, y) => {
			p5.mouseX > squareSide * x &&
			p5.mouseX < squareSide * x + squareSide &&
			p5.mouseY > squareSide * y &&
			p5.mouseY < squareSide * y + squareSide
				? p5.fill(175)
				: p5.fill(255);
		};
	};
</script>

<P5 {sketch} />
