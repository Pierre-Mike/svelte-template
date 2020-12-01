<script>
	import Player from "./Player.svelte";
	import { onDestroy } from "svelte";

	import { playerStore } from "../lib/redux.js";
	let players = [];
	const unsubscribe = playerStore.subscribe((value) => (players = value));
	let newPlayerName = "";

	function addPlayers(name) {
		playerStore.dispatch({ type: "ADD", name });
		newPlayerName = "";
	}

	const removePlayer = (event) => {
		console.log(`remove player ${event.detail}`);
		playerStore.dispatch({ type: "REMOVE", id: event.detail });
	};
	const updatePlayer = (event) => {
		playerStore.dispatch({ type: "UPDATE", detail: event.detail });
	};
	onDestroy(unsubscribe);
</script>

<main>
	{#each players as player, i}
		<Player
			id={i}
			name={player.name}
			score={player.score}
			on:removeplayer={removePlayer}
			on:updateplayer={updatePlayer} />
	{:else}
		<li>No items</li>
	{/each}

	<form on:submit|preventDefault={addPlayers(newPlayerName)}>
		<input type="text" bind:value={newPlayerName} />
		<input type="submit" value="test" />
	</form>
</main>
