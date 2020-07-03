<!--<script>-->
<!--    import Players from './components/Players.svelte';-->

<!--    import Home from "./pages/Home.svelte";-->
<!--    let count = 0-->
<!--    setInterval(()=>count++,1000);-->
<!--    $: count = count%10==0?0:count-->
<!--    export let basics;-->
<!--</script>-->


<!--<Errors/>-->
<!--<header>-->
<!--    <menu>-->
<!--        <ul>-->
<!--            <li>test link</li>-->
<!--        </ul>-->
<!--    </menu>-->
<!--</header>-->

<!--<main>-->
<!--    <h1>Hello {basics.name} : {count}!</h1>-->
<!--    <h1>{basics.location.address}</h1>-->
<!--    <Home/>-->
<!--    <Players/>-->
<!--</main>-->
<script>
    import { Router, Link, Route } from "svelte-routing";
    import Errors from "./components/Errors.svelte"
    import Home from "./pages/Home.svelte";
    import Players from "./pages/Players.svelte";
    export let url = "";

</script>

<Router url="{url}">
    <Errors/>
    <nav>
        <Link to="/">Home</Link>
        <Link to="players">player</Link>
    </nav>
    <div>
        <Route path="players" component="{Players}" />
        <Route path="/"><Home /></Route>
    </div>
</Router>

