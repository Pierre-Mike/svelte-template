<script>
	import { errors,removeError } from "../stores/errorsStore";
	import { fade } from "svelte/transition";
</script>

<style>
	li {
		background: red;
	}
</style>

<ul>
	{#each Object.entries($errors) as [ID, value]}
		<li transition:fade>{value.msg}<button on:click={removeError(ID)} >x</button></li>
	{/each}
</ul>
