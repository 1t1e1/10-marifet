<template>
    <div class="onparmak">
        <div>
            <p>This is training page, race page</p>
        </div>
        <div v-if="info">
            <p>
                {{ info.quote }}
            </p>
            <p> <span class="author"> {{info.author}} </span> said in <span class="book"> {{info.book}} </span> </p>

            <div> 
                <input type="text" v-model="current" :placeholder="quoteArray[count]">
            </div>
        </div>
        <div v-else>
            <p> info is empty</p>
            <p> update from </p>
        </div>
        <br>
        <button @click="getRequest">Degistir </button>
        <button @click="count++">count Arti </button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TrainingPage",
    data() {
        return {
            data: "ne e",
            info: "",
            current: "",
            count: 0,
        };
    },
    mounted() {
        this.getRequest();
    },
    computed:{
            quoteArray:function(){
                return  this.info.quote.split(" ");
            }

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
<style scoped>

.book{

    font-style: italic;
    background-color: blue;
    color: white;
    padding: 5px;
    border: 2px solid black;
    border-radius: 5px ;
}
.author{

    font-style: italic;
    background-color: blue;
    color: white;
    border: 2px solid black;
    border-radius: 5px ;

}

</style>
