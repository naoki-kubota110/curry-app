<template>
    <v-card color="gray lighten-4" flat height="100px" tile>
         <v-toolbar dense>
             <v-toolbar-title><img alt="main logo" src="../../public/img/header_logo.png" height="35"></v-toolbar-title>
             <v-spacer></v-spacer>

             <router-link style="" to='/cart' class="mx-5 link">ショッピングカート</router-link>
             <router-link to='/orderhistory' class="mx-5 link">注文履歴</router-link>
             <router-link to='/login' class="mx-5 link" v-if="!$store.state.login_user">ログイン</router-link>
             <v-btn @click="logout" class="mx-5 link" v-if="$store.state.login_user">ログアウト</v-btn>
         </v-toolbar>
    </v-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:'Header',
    methods:{
        ...mapActions(['logout']),
    }
}
</script>

<style scoped>
.link {
    text-decoration: none; 
    color: black;
}
</style>