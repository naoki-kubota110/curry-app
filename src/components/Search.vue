<template>
<v-container>
 
<!--ここから追加-->
<v-container>
<v-row  style="height: 100px">
  <v-col style="background-color: #FFCDD2" cols="10" sm="8" md="6" lg="4" xl="3">
  <v-sheet color="red" tile class="pa-1">商品を検索する</v-sheet>
    <input type="text" placeholder="Search" v-model="search_term" aria-label="Search" />
    <v-btn v-on:click.prevent="getArticles()">検索</v-btn>
    <v-btn v-on:click="removetext()">クリア</v-btn>
  </v-col>
</v-row>
</v-container>
 <!-- 表示 -->
<v-row>
<v-col cols="4" v-for="(search, index) in changeView" :key="index">
  <v-card>
      <v-img :src="search.img"></v-img>
      <v-card-title>
        <router-link :to="{name:'ItemDetail',params:{item_id:search.id}}">{{search.name}}</router-link>
      </v-card-title>
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
        }
    },
    computed:{
      changeView(){
        return this.searchItem;
      }
    },
    methods:{
        getArticles(){
            this.searchItem=[];
            this.searchBox = this.$store.state.itemData;
            this.searchBox.forEach(search =>{
            let findName = search.name
            //search関数でnullの時は-1を返すようにしている
            if(0<=findName.search(this.search_term)){
              this.searchItem.push(search);
            }})
            this.$store.state.flag=false;
        },
        removetext: function() {
            this.search_term = '';
            this.searchItem = [];
            this.$store.state.flag=true;
        }
    }
}
</script>
