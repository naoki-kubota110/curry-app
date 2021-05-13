<template>
<v-app>
  <v-flex xs12 class="ma-12" jsutify-center>
    <SearchForm></SearchForm>
  </v-flex>
<v-container>
  <v-container v-if="$store.state.flag" class="my-50" justify-center>
    <v-row>
      <v-col cols="4" v-for="(item,index) in itemData" :key="index">
        <v-card id="item">
          <!-- 画像 -->
          <div>
            <router-link :to="{name:'ItemDetail',params:{item_id:item.id}}">
              <v-img :src="item.img" id="img"></v-img>
            </router-link>
          </div>
          <!-- タイトルなど -->
          <div>
            <v-card-title>
              <router-link :to="{name:'ItemDetail',params:{item_id:item.id}}" id="itemName">{{item.name}}</router-link>
            </v-card-title>
          </div>
          <!-- 金額 -->
          <div>
          <v-card-text>
            普通:<span id="price">{{item.price}}</span>円(税抜き)<br/>
          </v-card-text>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-container>
</v-app>
</template>

<script>
import {mapState} from 'vuex'
import SearchForm from '../components/Search.vue';

export default {
  name: "Home",
  components: {
    SearchForm //使用するためにコンポーネントに追加
  },
  created(){
    this.$store.state.flag = true
  },
  computed: mapState({
    itemData: state => state.itemData
  }),
}
</script>
<style scoped>
#img{
 height:200px;
 width:300px;
 border-bottom: solid 1px rgb(161, 159, 159);
 border-radius:30px 30px 0 0;
}
#item{
  height:350px;
  width:300px;
  border-radius: 30px;
  border: solid 0.5px;
}
#price{
  font-size: 25px;
}
#itemName{
  color: black;
  text-decoration: none;
}
</style>
	