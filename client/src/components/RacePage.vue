<template>
    <div class="onparmak">
        <div>
            <p>This is training page, race page</p>
            <hr />
        </div>
        <div v-if="info">
            <p>first view</p>
            <p>
                {{ info.quote }}
            </p>
            <br />
            <p>second view</p>

            <p>
                <span
                    v-for="(word, index) in quoteArray"
                    :key="word + index"
                    :class="styleMethod(index)"
                    >{{ word }}
                </span>
            </p>
            <br />
            <p>
                <span class="author"> {{ info.author }} </span> said in
                <span class="book"> {{ info.book }} </span>
            </p>

            <div>
                <input
                    type="text"
                    v-model="current"
                    :placeholder="quoteArray[count]"
                    @keydown.space="wordCheck"
                />
            </div>
        </div>
        <div v-else>
            <p>info is empty</p>
            <p>update from</p>
        </div>
        <br />
        <button @click="getRequest">Degistir</button>
        <button @click="count++">count Arti</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TrainingPage",
    data() {
        return {
            info: "",
            current: "",
            count: 4,
        };
    },
    mounted() {
        this.getRequest();
    },
    computed: {
        quoteArray: function() {
            return this.info.quote.split(" ");
        },
    },
    methods: {
        getRequest: function() {
            let maxId = 10;
            let randomId = Math.floor(Math.random() * maxId);
            axios
                .get("http://localhost:3000/" + randomId)
                .then(response => (this.info = response.data.response))
                .catch(err => {
                    console.log(err);
                });
        },
        wordCheck: function() {
            this.count++;
            this.current = "";
        },
        styleMethod: function(index) {
            if (index < this.count) {
                return "didwrite";
            } else {
                return "willwrite";
            }
        },
    },
};
</script>

// https://codepen.io/callumacrae/pen/oyXXWR
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book {
    font-style: italic;
    background-color: blue;
    color: white;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px;
}
.author {
    font-style: italic;
    background-color: blue;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
}

.didwrite {
    background-color: greenyellow;
}
.willwrite {
    background-color: whitesmoke;
}
</style>
