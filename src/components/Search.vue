<template>
<v-container>
<v-flex justify-center>
<v-sheet
  color="white"
  elevation="3"
  height="100"
  rounded=tr
  width="500"
>
  <sheet-header>
  <v-sheet color="grey lighten-2" tile class="pa-1">商品を検索する</v-sheet>
  </sheet-header>
  商品名<br/>
  <input height="3" type="text" placeholder="Search" v-model="search_term" aria-label="Search" />&nbsp;&nbsp;
  <v-btn color="primary" medium v-on:click.prevent="getArticles()">検索</v-btn>&nbsp;
  <v-btn color="secondary" medium outlined v-on:click="removetext()">クリア</v-btn>
</v-sheet>
</v-flex>

    

 <!--showがfalseの時にメッセージ表示-->
<div v-if="show">該当する商品がありません</div>
<v-row>
<v-col cols="4" v-for="(search, index) in changeView" :key="index">
  <v-card>
      <router-link :to="{name:'ItemDetail',params:{item_id:search.id}}">
      <v-img :src="search.img"></v-img>
      </router-link>
      <v-card-title>
        <router-link :to="{name:'ItemDetail',params:{item_id:search.id}}">{{search.name}}</router-link>
      </v-card-title>
      <v-card-text>&nbsp;普通:&nbsp;{{search.price}}円(税抜き)</v-card-text>
  </v-card>
</v-col>
</v-row>
</v-container>
</template>
<script>
export default {
    name:'Search',
    data(){
        return{
            search_term:'',
            searchBox:[],
            searchItem:[],
            show:false
        }
    },
    computed:{
      changeView(){
        return this.searchItem;
      }
    },
    methods:{
        getArticles(){
            this.searchItem = [];
            this.searchBox = this.$store.state.itemData;
            this.searchBox.forEach(search =>{
              let findName = search.name
              //search関数でnullの時は-1を返すようにしている
              if(0<=findName.search(this.search_term)){
                this.searchItem.push(search);
              } else {
                this.$store.state.flag=false;
              }
            });
            if(this.searchItem.length === 0) {
              this.show = true;
            } else {
              this.show = false;
            }
        },
        removetext: function() {
            this.search_term = '';
            this.searchItem = [];
            this.$store.state.flag=true;
            this.show= false;
        }
    }
}
</script>