<template>
<v-form>
    <div>数量：</div>
    <div style="width:200px;"><v-text-field
    v-model="number"
    type="number"
    max="100"
    min="1"
    >
    </v-text-field></div>
    <v-btn @click="addCart()" color="orange" dark>カートに入れる</v-btn>
</v-form>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            number:1,
            item:''
        }
    },
    created(){
        let items = this.$store.state.items;
        let paramId = this.$route.params.item_id;
        items.forEach(item => {
            if(item.id===paramId){
                this.item = item;
            }
        });
    },
    methods:{
        ...mapActions(['addItemToCart']),
        addCart(){
            if(confirm(`${this.item.name}を${this.number}個追加しますがよろしいですか？`)){
                this.addItemToCart({item:this.item,number:this.item.number})
            }
        }
    }

}
</script>