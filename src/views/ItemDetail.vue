<template>
<v-container id="container">
<v-layout row rap justify-center>
<div class="section__title">
    <div class="section__title-text">商品詳細</div>
</div>

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
        <div>数量</div>
        <input class='form-control' type='number' v-model='count' max="10" min="1"><br/>
        <div>この商品金額：{{price}} 円(税抜)</div>
        <v-btn color="green">カートに入れる</v-btn>
        </v-form>
        </div>

</v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return {
            item:'',
            items:this.$store.state.itemData,
            id:'',
            count:1
            
        }
    },
    computed: {
        price: function(){
            return this.item.price * this.count
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
}
</script>

<style lang="scss" scoped>
/* ここから追加 */
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