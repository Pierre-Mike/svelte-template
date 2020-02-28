<script>
    import {createEventDispatcher} from 'svelte'
    export let name;
    export let score;
    export let id;
    const dispatch = createEventDispatcher();
    export const addScore = (n=1)=>{score+=n}
    export const minusScore = (n=1)=>{score-=n}
    const removePlayer = ()=>dispatch("removeplayer",id)

    $: dispatch("updateplayer",{name,score,id})
</script>

<div class="player">
    <div class="name">{name}</div>
    <div class="score">{score}</div>
    <button on:click={()=>addScore()}>+</button>
    <button on:click={()=>minusScore()}>-</button>
    <button on:click={removePlayer}>X</button>
</div>



