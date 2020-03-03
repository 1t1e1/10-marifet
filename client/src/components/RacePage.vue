<template>
    <div class="onparmak">
        <div>
            <p>This is training page, race page</p>
            <hr />
        </div>
        <div v-if="info">
            <div>
                <p v-for="index in numOfRow" :key="'col' + index">
                    <!-- debug icin  -->
                    <!-- {{ calculateWordPlace(index, j) }} -->
                    <!-- "({{ index }},{{ j }})" -->
                    <span
                        v-for="j in longOfRow"
                        :class="styleMethod(calculateWordPlace(index, j))"
                        :key="'word' + calculateWordPlace(index, j)"
                        >{{ quoteArray[calculateWordPlace(index, j)] }}</span
                    >
                </p>
                <p>
                    <span
                        v-for="i in remainInRow"
                        :class="styleMethod(calculateWordPlace(longOfRow, i))"
                        :key="'word' + calculateWordPlace(longOfRow, i)"
                        >{{
                            quoteArray[calculateWordPlace(numOfRow + 1, i)]
                        }}</span
                    >
                </p>
            </div>

            <hr />

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
        <p>
            <span class="author"> {{ info.author }} </span> said in
            <span class="book"> {{ info.book }} </span>
        </p>
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
            longOfRow: 45,
        };
    },
    mounted() {
        this.getRequest();
    },
    computed: {
        quoteArray: function() {
            return this.info.quote.split("");
        },

        remainInRow: function() {
            return this.quoteArray.length % this.longOfRow;
        },
        numOfRow: function() {
            return Math.floor(this.quoteArray.length / this.longOfRow);
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
        calculateWordPlace(i, j) {
            return (i - 1) * this.longOfRow + j - 1;
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
p {
    font-size: 18px;
    line-height: 0.6;
}

.didwrite {
    background-color: greenyellow;
}
.willwrite {
    background-color: whitesmoke;
}
</style>
