<script>
	import { playerStore } from "../stores/playerStore.js";

	export let name;
	export let score;
	export let id;
	const addScore = (n = 1) => {
		score += n;
	};
	const minusScore = (n = 1) => {
		score -= n;
	};
	$: playerStore.update(detail);
</script>

<div class="player">
	<div class="name">{name}</div>
	<div class="score">{score}</div>
	<button on:click={() => addScore()}>+</button>
	<button on:click={() => minusScore()}>-</button>
	<button
		on:click={() => {
			playerStore.remove(id);
		}}>X</button
	>
</div>
