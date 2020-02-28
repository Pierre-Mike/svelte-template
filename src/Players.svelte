<script>
    import Player from './Player.svelte'
    export let players = [];
    let newPlayerName = "";
    function addPlayers(name) {
        players = [...players, ({"name": name, score: 0})]
        newPlayerName = "";
    }

    const removePlayer = (event) => {
        console.log("remove player")
         players.splice(event.detail,event.detail+1);
         players = [...players]
    }
    const updatePlayer = (event) => {
         players[event.detail.id] = event.detail
        console.log("update player")
        players = [...players]
    }



    $: console.log(players)
</script>

<main>
    {#each players as player, i}
        <Player id={i} name={player.name} score={player.score} on:removeplayer={removePlayer} on:updateplayer={updatePlayer}/>
    {/each}
    <form on:submit|preventDefault={addPlayers(newPlayerName)}>
        <input type="text" bind:value={newPlayerName}>
        <input type="submit" value="test">
    </form>
</main>


