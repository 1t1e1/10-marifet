<template>
    <div class="onparmak">
        <p>{{ data }}</p>
        <p>{{ info }}</p>
        <button @click="getRequest">++</button>
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
        this.getRequest();
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
    },
};
</script>

// https://codepen.io/callumacrae/pen/oyXXWR
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
