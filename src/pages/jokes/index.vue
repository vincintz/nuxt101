<template>
    <div>
        <FuncTest text="Count" :foo="jokeCount" />
        <SearchJokes v-on:search-text="searchText" />
        <Joke v-for="joke in allJokes"
                :key="joke.id"
                :id="joke.id"
                :joke="joke.joke" />
    </div>
</template>

<script>
import axios from 'axios';
import Joke from '../../components/Joke';
import SearchJokes from '../../components/SearchJokes';
import FuncTest from '../../components/FuncTest'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        Joke,
        SearchJokes,
    },
    created() {
        this.fetchJokes();
    },
    computed: {
        ...mapGetters({ allJokes: 'jokes/allJokes' }),
        jokeCount() {
            return this.allJokes.length;
        },
    },
    methods: {
        ...mapActions({
            fetchJokes: 'jokes/fetchJokes'
        }),
        searchText(text) {
            this.fetchJokes(text);
        }
    },
    head() {
        return {
            title: "NUXT101 - Jokes",
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
