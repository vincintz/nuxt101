<template>
    <header class="header">
        <h1 class="title">NUXT101</h1>
        <ul>
            <li><nuxt-link to="/"><fa-icon far icon="star" style="color: #fff;" /> Home</nuxt-link></li>
            <li><nuxt-link to="/jokes"><fa-icon fas icon="laugh-wink" style="color: #fff;" /> Jokes</nuxt-link></li>
            <li><nuxt-link to="/maps"><fa-icon fas icon="globe" style="color: #fff;" />Maps</nuxt-link></li>
            <li><nuxt-link to="/import"><fa-icon far icon="star" style="color: #fff;" /> Import</nuxt-link></li>
            <li><nuxt-link to="/about"><fa-icon fas icon="store" style="color: #fff;" />About</nuxt-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px dotted #ccc;
    }
    .header .title {
        font-size: 3rem;
        color: #526488;
    }
    .header ul {
        display: flex;
    }
    .header a {
        display: inline-block;
        background: #333;
        color: #fff;
        padding: 0.3rem 1rem;
        margin-right: 0.5rem;
    }
</style>
