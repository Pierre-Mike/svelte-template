<script lang="ts">
	import Players from "./Players/Players.svelte";
	import { onDestroy } from "svelte";
	export let name;
	import switchStore from "./stores/switchStore.js";
	let visible = false;
	const unsubscribe = switchStore.subscribe((value) => (visible = value));
	onDestroy(unsubscribe);
</script>

<main>
	{#if visible}
		<Players />
		<button on:click={() => switchStore.switch()}>turn off</button>
	{:else}
		<button on:click={() => switchStore.switch()}>turn on</button>
	{/if}
	<span>Hello {name}!</span>
</main>

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
