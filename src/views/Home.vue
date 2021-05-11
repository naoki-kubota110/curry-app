<template>
  <v-container id="container">
    <v-layout row rap justify-left>
    <SearchForm/>
    </v-layout>
    <v-flex xs12 class="text-left">
      <h2>カレー一覧</h2>
    </v-flex>

    <v-layout row rap justify-center>
        <v-card id="item" v-for="(item,index) in itemData" :key="index" outlined width="230">
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
            <v-card-text>&nbsp;М&nbsp;{{item.price}}円(税抜き)<br/>
            &nbsp;L&nbsp;{{item.subPrice}}円(税抜き)</v-card-text>
            <v-card-text></v-card-text>
          </div>
        </v-card>
    </v-layout>

  
  </v-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'Home',

  computed: mapState({
    itemData: state => state.itemData
  })
}
 
</script>
	