<template>
<v-container>
  <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
          <v-card>
              <v-card-title>商品を検索する</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-form>
                  <div  align="center">
                    <v-text-field
                      label="商品名 or キーワードで検索"
                      :rules="rules"
                      hide-details="auto"
                      v-model="search_term"
                    ></v-text-field><p/>
                  <v-btn color="orange" dark @click="getArticles()">検索</v-btn>&nbsp;
                  <v-btn color="secondary" @click="removetext()">クリア</v-btn>
                  </div>
                </v-form>
              </v-card-text>
          </v-card>
      </v-col>
  </v-row>
  <div v-if="show" align="center" style="font-size:20px; font-weight: bold" class="ma-10">該当する商品がありません</div>       
 <!--showがfalseの時にメッセージ表示-->
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