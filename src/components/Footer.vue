<template>
<v-footer color="#FFAB40" padless height="90px" dark>
  <v-row justify="center" no-gutters align="center">
    <v-col align="center" cols="1" id="cols">
      <router-link id="links" to="/" class="ma-5 link" >
        <v-icon>mdi-home</v-icon>
      </router-link>
    </v-col>
    <v-col align="center" cols="1" id="cols">
      <router-link id="links" to="/cart" class="ma-5 link">
        <v-icon>mdi-cart</v-icon>
      </router-link>
    </v-col>
    <v-col align="center" cols="1" v-if="$store.state.login_user" id="cols">
      <router-link id="links" to="/orderhistory" class="ma-5 link" >
        <v-icon>mdi-playlist-check</v-icon>
      </router-link>
    </v-col>
  </v-row>
  <v-col class="py-4 text-center white--text" cols="12">
    Copyright©︎ {{ new Date().getFullYear() }} —
    <strong>ラクラクカリー All Rights Reserved</strong>
  </v-col>
  </v-footer>
</template>
<style scoped>
#links{
  text-decoration:none;
}
#cols{
  width:50px;
}
</style>
