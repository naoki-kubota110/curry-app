<template>
<v-form>
    <div>数量：</div>
    <div style="width:200px;">
    <v-text-field
    v-model="number"
    type="number"
    max="100"
    min="1"
    >
    </v-text-field>
    </div>
    <v-btn @click="addCart()" color="orange" dark>カートに入れる</v-btn>
</v-form>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            number:1,
            item:{id:2, name:'カツカレー', text:'食べると勝負に勝てると言われる勝つカレー。ラクラクカレー定番の１品です', price:1490, subPrice:2570, img:'/img/1.jpg'},
        }
    },
    methods:{
        ...mapActions(['addItemToCart']),
        addCart(){
            if(confirm(`${this.item.name}を${this.number}個追加しますがよろしいですか？`)){
                this.addItemToCart({itemId:this.item.id,number:this.number}).then(()=>{
                    this.$router.push('/cart')
                })
            }
        }
    }

}
</script>