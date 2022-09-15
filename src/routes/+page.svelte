<script>
	import P5 from 'p5-svelte';
	import { phase } from '$stores/phase.store';
	import PartySelection from '$lib/party-selection/PartySelection.svelte';

	const sketch = (p5) => {
		const gridSideSquares = 20;
		const squareSide = p5.windowWidth / 2 / gridSideSquares;

		p5.setup = () => {
			p5.createCanvas(p5.windowWidth / 2 + 2 * squareSide, p5.windowHeight);
			p5.background(100);
			for (let x = 1; x < gridSideSquares + 1; x++) {
				for (let y = 1; y < gridSideSquares + 1; y++) {
					p5.fill(getDefaultTint(x, y));
					p5.square(squareSide * x, squareSide * y, squareSide);
				}
			}
		};

		p5.draw = () => {
			p5.background(100);
			for (let x = 1; x < gridSideSquares + 1; x++) {
				for (let y = 1; y < gridSideSquares + 1; y++) {
					p5.fill(getDefaultTint(x, y));
					$phase === 'character selection' && selectSquare(x, y, getDefaultTint(x, y));
					p5.square(squareSide * x, squareSide * y, squareSide);
				}
			}
		};

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth / 2 + 2 * squareSide, p5.windowHeight);
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

<div class="game">
	<P5 {sketch} />
	<div class="panel-right">
		{#if $phase === 'character selection'}
			<PartySelection />
		{/if}
	</div>
</div>

<style>
	.game {
		display: flex;
		flex-direction: row;
		height: 100vh;
		width: 100vw;
	}

	.panel-right {
		height: 100%;
		width: 100%;
		padding: var(--scale-medium);
	}
</style>
