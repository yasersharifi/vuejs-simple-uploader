<template>
<!--
Learn Link
https://academind.com/tutorials/vue-image-upload


-->
    <div class="hello bg-red-500">
        <h1>{{ msg }}</h1>
        <input type="file" v-on:change="onLoad($event)" v-on:load="getDataUrl($event)">
        <h1>Preview</h1>
        <img :src="previewImg" width="200" alt="">
        <h1>Canvas</h1>
        <div v-html="canvasImg"></div>
    </div>
</template>

<script>

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            selectedImg: null,
            previewImg: null,
            canvasImg: null
        }
    },
    methods: {
        onLoad(event) {
            this.selectedImg = event.target.files[0];
            this.previewImg = URL.createObjectURL(this.selectedImg);
            
            //base 64
            const reader = new FileReader();
            reader.onload = function(e) {
                this.canvasImg = e.target.result
                console.log(this.canvasImg)
            };
            reader.onerror = function(error) {
                alert(error);
            };
            this.canvasImg = reader.readAsDataURL(this.selectedImg);
            // console.log(event)
        },
        getDataUrl(event) {
            console.log(event)
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
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
</style>

