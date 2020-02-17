<template>
    <div class="onparmak">
        <p>{{ data }}</p>
        <p>{{ info }}</p>
        <button @click="clicked">++</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "HelloWorld",
    data() {
        return {
            data: "ne e",
            info: "",
        };
    },
    mounted() {
        axios
            .get("http://localhost:3000/3")
            .then(response => (this.info = response.data.response));
        console.log("hell now");
    },
    methods: {
        clicked: function() {
            let maxId = 5;
            let randomId = Math.floor(Math.random() * maxId);
            console.log("clickedd ,", randomId);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
