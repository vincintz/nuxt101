<template>
    <div>
        <h1>Dad Jokes</h1>
        <p>This is a website... I think.</p>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "NUXT101 - About",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Best place for corny dad jokes"
                }
            ]
        }
    }
}
</script>
