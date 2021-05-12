<template>
<v-container justify-center id="container">
  <v-flex xs12 class="text-left" justify-center>
  <SearchForm></SearchForm>
  </v-flex>
  <v-container v-if="$store.state.flag" class="my-50" justify-center>
  <v-row>
  <v-col cols="4" v-for="(item,index) in itemData" :key="index">
    <v-card id="item">
      <!-- 画像 -->
      <div id="img">
        <v-img :src="item.img" alt="画像"></v-img>
      </div>
      <!-- タイトルなど -->
      <div id="contents">
      <v-card-title>
      <router-link :to="{name:'ItemDetail',params:{item_id:item.id}}">{{item.name}}</router-link>
      </v-card-title>
      <v-card-subtitle>{{item.author}}</v-card-subtitle>
      </div>
      <!-- 金額 -->
      <div>
      <v-card-text>&nbsp;普通&nbsp;{{item.price}}円(税抜き)<br/>
      </v-card-text>
      </div>
    </v-card>
  </v-col>
  </v-row>
  </v-container>
</v-container>
</template>

<script>
import {mapState} from 'vuex'
import SearchForm from '../components/Search.vue';

export default {
  name: "Home",
  components: {
    SearchForm //使用するためにコンポーネントに追加
  },
  computed: mapState({
    itemData: state => state.itemData
  }),
}
</script>
	