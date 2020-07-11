import axios from 'axios';

const config = {
    headers: {
        Accept: 'application/json'
    }
};

export const state = () => ({
    jokes: [],
    joke: undefined,
});

export const getters = {
    allJokes: (state) => state.jokes,
    currentJoke: (state) => state.joke,
};

export const actions = {
    fetchJokes({ commit }, term='') {
        axios.get(`https://icanhazdadjoke.com/search?term=${term}`, config)
            .then(res => {
                commit('setJokes', res.data.results);
            })
            .catch(err => {
                console.log("Error")
            });
    },
    fetchJoke({ commit }, id) {
        axios.get(`https://icanhazdadjoke.com/j/${id}`, config)
            .then(res => {
                console.log(res.data.joke)
                commit('setJoke', {
                    id: res.data.id,
                    joke: res.data.joke,
                });
            })
            .catch(err => {
                console.log("Error")
            });
    }
};

export const mutations = {
    setJokes: (state, jokes) => state.jokes = jokes,
    setJoke:  (state, joke)  => state.joke  = joke,
};
