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
					selectSquare(x, y, getDefaultTint(x, y));
					p5.square(squareSide * x, squareSide * y, squareSide);
				}
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
		};

		const getDefaultTint = (x, y) => {
			let tint;
			if (x % 2 === 0) {
				y % 2 === 0 ? (tint = 255) : (tint = 200);
			} else if (x % 2 !== 0) {
				y % 2 === 0 ? (tint = 200) : (tint = 255);
			}
			return tint;
		};

		const selectSquare = (x, y, defaultTint) => {
			p5.mouseX > squareSide * x &&
			p5.mouseX < squareSide * x + squareSide &&
			p5.mouseY > squareSide * y &&
			p5.mouseY < squareSide * y + squareSide
				? p5.fill(125)
				: p5.fill(defaultTint);
		};
	};
</script>

<P5 {sketch} />
