<template>
<v-app-bar app>
    <v-app-bar-nav-icon @click="sideNav">
        <v-icon>mdi-microsoft-xbox-controller-menu</v-icon>
    </v-app-bar-nav-icon>
        <v-toolbar-title>
            <router-link to='/'>
                <img alt="main logo" src="../../public/img/header_logo.png" height="50">
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link style="" to='/cart' class="mx-5 link">ショッピングカート</router-link>
        <router-link to='/orderhistory' class="mx-5 link">注文履歴</router-link>
        <v-btn @click="logout" class="mx-5 link" v-if="$store.state.login_user">ログアウト</v-btn>
        <router-link to='/login' class="mx-5 link" v-else>ログイン</router-link>
</v-app-bar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:'Header',
    methods:{
        ...mapActions(['sideNav','logout']),
    }
}
</script>

<style scoped>
.link {
    text-decoration: none; 
    color: black;
}
</style>