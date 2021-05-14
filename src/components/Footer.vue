<template>
  <v-footer color="#FFAB40" padless height="100px" dark>
      <v-row justify="center" no-gutters >
        <v-col align="center" cols="3">
          <router-link to="/" class="ma-5 link" ><v-icon>mdi-home</v-icon></router-link>
        </v-col>
        <v-col align="center" cols="3">
          <router-link style="" to="/cart" class="ma-5 link"
            ><v-icon>mdi-cart</v-icon></router-link
          >
        </v-col>
        <v-col align="center" cols="3" v-if="$store.state.login_user">
          <router-link to="/orderhistory" class="ma-5 link" 
            >注文履歴</router-link
          >
        </v-col>
      </v-row>


      <v-col class=" py-4 text-center white--text" cols="12">
        Copyright©︎ {{ new Date().getFullYear() }} —
        <strong>ラクラクカリー All Rights Reserved</strong>
      </v-col>

  

  </v-footer>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}
</style>
