<template>
<v-container>
    <img :src="items[1].img">
</v-container>
</template>
<script>
export default {
    data(){
        return {
            headers:[
                {name:'商品名'},
                {price:'価格'},
            ],
            items:this.$store.state.itemData
        }
    }
}
</script>