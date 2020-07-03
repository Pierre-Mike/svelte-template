<script>
    import Player from '../components/Player.svelte'
    import { playersStore,addPlayer} from '../stores/playersStore'

    let newPlayerName = "";
    let addPlayerAndReset = ()=>{
        addPlayer(newPlayerName)
        newPlayerName = ""
    }
</script>

<main>
    {#each Object.entries($playersStore) as [name, value] }
        <Player name={name} score={value.score} />
    {/each}
    <form on:submit|preventDefault={addPlayerAndReset} >
        <input type="text" maxlength="20" bind:value={newPlayerName}>
        <input type="submit" value="test">
    </form>
</main>


