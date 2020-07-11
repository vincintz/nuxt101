<template>
    <div>
        <nuxt-link to="/jokes">&lt;&lt;&nbsp;Back</nuxt-link>
        <h3>{{ joke }}</h3>
        <small>Joke ID: {{ $route.params.id }}</small>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            joke: undefined,
        }
    },
    created() {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
            .then( res => {
                this.joke = res.data.joke;
            })
            .catch( err => {
                console.error(err);
            });
    }
}
</script>
