<template>
	<div class="container">
		<p>Small webapplication to test nuxtjs</p>
	</div>
</template>

<script>
export default {
    created() {
        // const c = document.cookie;
        // console.log(c);
    },
    head() {
        return {
            title: "NUXT101",
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
