<template>
    <div>
        <SearchJokes v-on:search-text="searchText" />
        <Joke v-for="joke in jokes"
                :key="joke.id"
                :id="joke.id"
                :joke="joke.joke" />
    </div>
</template>

<script>
import axios from 'axios';
import Joke from '../../components/Joke';
import SearchJokes from '../../components/SearchJokes';

const config = {
    headers: {
        Accept: 'application/json'
    }
};

export default {
    components: {
        Joke,
        SearchJokes,
    },
    data() {
        return {
            jokes: [],
        }
    },
    created() {
        axios.get('https://icanhazdadjoke.com/search', config)
            .then(res => {
                this.jokes = res.data.results;
            })
            .catch(err => {
                console.log("Error")
            });
    },
    methods: {
        searchText(text) {
            axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config)
                .then(res => {
                    this.jokes = res.data.results;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    head() {
        return {
            title: "DadJokes",
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
