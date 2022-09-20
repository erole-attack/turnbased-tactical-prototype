<script>
	import P5 from 'p5-svelte';
	import { board, gridSideSquares, squareSide } from '$stores/board.store';
	import { initiativeOrder } from '$stores/party.store';
	import { getDefaultTileColor } from '$stores/board.service';

	let refreshP5;
	$: $board, (refreshP5 = !refreshP5);

	let sketch = (p5) => {
		p5.preload = () => {
			initiativeOrder.subscribe((party) => {
				party.forEach((character) => {
					window[character.role] = character.icon(p5);
				});
			});
		};

		p5.setup = () => {
			p5.createCanvas(p5.windowWidth / 2 + 2 * squareSide(p5), p5.windowHeight);
			p5.background(100);
			for (let x = 1; x <= gridSideSquares; x++) {
				for (let y = 1; y <= gridSideSquares; y++) {
					p5.fill(getDefaultTileColor(x, y));
					p5.square(squareSide(p5) * x, squareSide(p5) * y, squareSide(p5));
				}
			}
		};

		$board(p5);

		p5.windowResized = () => {
			p5.resizeCanvas(p5.windowWidth / 2 + 2 * squareSide(p5), p5.windowHeight);
		};
	};
</script>

{#if refreshP5}
	<P5 {sketch} />
{:else}
	<P5 {sketch} />
{/if}
