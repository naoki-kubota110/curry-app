<template>
<v-container id="container">
    <v-layout row rap justify-center>
    <h2>商品詳細</h2>
    <v-row  class="item_contents" justify="center">
        <v-col class="item_contents">
        <img :src="item.img" class="img-fluid" alt="画像" width="400" height="180">
        </v-col>
        <v-col  class="item_contents">
        <p>{{item.name}}</p>
        <p>{{item.text}}</p>
        </v-col>
    </v-row>
        <div>        
        <v-form>
            <label for="inputResponsibleCompany">サイズ</label><br/>
            <label class="radio-inline">
            <input type="radio" name="responsibleCompany" checked="checked">
            <span class="price">普通</span>&nbsp;&nbsp;{{item.price}}円（税抜）
            </label>
            <v-form>
            <div>数量：</div>
            <div>
            <v-text-field
            v-model="number"
            type="number"
            max="100"
            min="1"
            ><span>個</span>
            </v-text-field>
            <h2>ご注文金額合計：{{item.price*number}}円(税抜)</h2>
            <v-btn @click="addCart()" color="orange" dark>カートに入れる</v-btn>
            </div>
            </v-form>
        </v-form>
        </div>
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
        let paramId = this.$route.params.item_id;
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

<style lang="scss" scoped>
.item_contents {
  margin-top: 20px;
  justify-content: center;
  &-img {
    text-align: center;
    width: 10px;
  }
  &-text {
    word-wrap: break-word;
  }
}
</style>
