<template>
<v-container>
<v-layout row rap justify-center>
    <h2>商品詳細</h2>
    <v-row justify="center" class="ma-5">
        <v-col justify="center" align="center">
            <v-card flat>
            <img :src="item.img" alt="画像" width="400" height="280" justify-center>
            </v-card>
        </v-col>
        <v-col align="left" valign="middle">
            <h3 class="ma-2">{{item.name}}</h3><br/>
            <p>{{item.text}}</p>
        </v-col>
    </v-row>
    <v-row justify="center" class="ma-3">        
    <v-form>
        <p style="font-weight : bold">サイズ </p>  
        <label class="radio-inline">
        <input type="radio" name="responsibleCompany" checked="checked">
        <span>  普通 &nbsp;&nbsp;&nbsp;{{item.price}}円（税抜）</span><br/>
        </label ><br/>
        <span style="font-weight : bold">数量</span>

        <v-text-field
        width="10"
        v-model="number"
        type="number"
        size="10"
        max="100"
        min="1"
        >
        </v-text-field>
        <h2>ご注文金額合計：{{item.price*number}}円(税抜)</h2>
        <v-btn @click="addCart()" color="orange" dark>カートに入れる</v-btn>
    </v-form>
    </v-row>
</v-layout>
</v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            item:'',
            items:this.$store.state.itemData,
            id:'',
            number:1
        }
    },
    created(){
        //let items = this.$store.state.items;
        let paramId = this.$route.params.item_id;
        console.log(this.items);
        this.items.forEach(item => {
            if(item.id===paramId){
                this.item = item
            }
        })
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

<style>
.number{
  width: 400px;
}
</style>