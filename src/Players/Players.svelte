<script>
	import Player from "./Player.svelte";
	import { onDestroy } from "svelte";

	import { playerStore } from "../stores/playerStore.js";
	const unsub = playerStore.subscribe();
	let newPlayerName = "";

	function addPlayers(name) {
		playerStore.add(name);
		newPlayerName = "";
	}

	onDestroy(unsub);
</script>

<main>
	{#each $playerStore as player, i}
		<Player id={i} name={player.name} score={player.score} />
	{:else}
		<li>No items</li>
	{/each}

	<form on:submit|preventDefault={addPlayers(newPlayerName)}>
		<input type="text" bind:value={newPlayerName} />
		<input type="submit" value="test" />
	</form>
</main>
