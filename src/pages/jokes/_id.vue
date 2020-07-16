<template>
    <div>
        <nuxt-link to="/jokes">&lt;&lt;&nbsp;Back</nuxt-link>
        <h3>{{ currentJoke.joke }}</h3>
        <small>Joke ID: {{ currentJoke.id }}</small>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
    created() {
        this.fetchJoke(this.$route.params.id);
    },
    computed: mapGetters({ currentJoke: 'jokes/currentJoke' }),
    methods: mapActions({ fetchJoke: 'jokes/fetchJoke' }),
    head() {
        return {
            title: `NUXT101 - ${this.currentJoke.id}`,
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
