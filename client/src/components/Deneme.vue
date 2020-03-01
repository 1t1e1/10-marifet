<template>
    <div class="onparmak">
        <p>
            {{ data }}
        </p>
        <Istatistik />
    </div>
</template>

<script>
import Istatistik from "./Istatistik";
export default {
    name: "HelloWorld",
    components: {
        Istatistik,
    },
    data() {
        return {
            data: "Deneme Vue",
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
* {
    background-color: blue;
}
</style>
