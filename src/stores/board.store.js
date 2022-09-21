import { writable } from 'svelte/store';
import { getDefaultTileColor } from '$stores/board.service';

export const gridSideSquares = 20;
export const squareSide = (p5) => p5.windowWidth / 2 / gridSideSquares;

export const board = writable((p5) => {
	p5.draw = () => {
		for (let x = 1; x <= gridSideSquares; x++) {
			for (let y = 1; y <= gridSideSquares; y++) {
				p5.fill(getDefaultTileColor(x, y));
				p5.square(squareSide(p5) * x, squareSide(p5) * y, squareSide(p5));
			}
		}
	};
});
