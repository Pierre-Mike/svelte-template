<script>
	import Player from "./Player.svelte";
	import { onDestroy } from "svelte";

	import playerStore from "../stores/playerStore.js";
	const unsub = playerStore.subscribe((_) => {
		console.log("updated players store");
	});
	let newPlayerName = "";

	function addPlayers(name) {
		playerStore.addPlayer(name);
		newPlayerName = "";
	}

	onDestroy(() => {
		console.log("players detroyed");
		unsub();
	});
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
