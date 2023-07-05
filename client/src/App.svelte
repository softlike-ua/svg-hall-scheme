<script>
    import Layout from "./lib/Layout.svelte";
    import Error from "./lib/Error.svelte";
    import Edit from "./lib/pages/Edit.svelte";
    import Show from "./lib/pages/Show.svelte";
    import Index from "./lib/pages/Index.svelte";
    import Create from "./lib/pages/Create.svelte";

    import {Router, Link, Route} from "svelte-routing";

    export let url

</script>
<Router {url}>
    <main>
        <div id="tip">

        </div>
        <Layout>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/show">Show</Link>
            </nav>
            <div class="container">
                <Route path='/' component={Index}/>
                <Route path='/edit/:id' component={Edit}/>
                <Route path='/show' component={Show}/>
                <Route path='/create' component={Create}/>
                <Route path='*' component={Error}/>
            </div>
        </Layout>
    </main>
</Router>
