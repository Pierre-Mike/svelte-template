<script lang="ts">
	import Players from "./Players/Players.svelte";
	import { onDestroy } from "svelte";
	export let name;
	import { storeVisible } from "./lib/redux.js";
	let visible = false;
	const unsubscribe = storeVisible.subscribe((value) => (visible = value));
	onDestroy(unsubscribe);
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	{#if visible}
		<Players />
		<button on:click={() => storeVisible.dispatch('HIDE')}>turn off</button>
	{:else}
		<button on:click={() => storeVisible.dispatch('SHOW')}>turn on</button>
	{/if}
	<h1>Hello {name}!</h1>
</main>
