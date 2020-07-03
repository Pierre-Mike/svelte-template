<script>
    import {scored, removePlayer, loss} from '../stores/playersStore'

    export let name;
    export let score;
</script>

<div class="player">
    <div class="name">{name}</div>
    <div class="score">{score}</div>
    <button on:click={loss(name)}>-</button>
    <button on:click={scored(name)}>+</button>
    <button on:click={removePlayer(name)}>X</button>
</div>
