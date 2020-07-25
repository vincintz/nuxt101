<template functional>
    <nuxt-link :to="`jokes/${props.id}`">
        <div class="joke">
            <p>{{ props.joke }}</p>
        </div>
    </nuxt-link>
</template>
<script>
export default {
    name: 'Joke',
    props: ['joke', 'id'],
}
</script>

<style scoped>
    .joke {
        padding: 1rem;
        border: 1px dotted #ccc;
        margin: 1rem 0;
    }
</style>
