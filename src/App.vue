<template>
<v-app>
  <Header></Header>
  <Search></Search>
  <SideNav></SideNav>
  <v-main>
    <router-view></router-view>
  </v-main>
  <Footer></Footer>
</v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import Footer from '@/components/Footer.vue'
import SideNav from '@/components/SideNav.vue'
import firebase from 'firebase'
import { mapActions } from 'vuex'


export default {
  name: 'App',
  components:{
    Header,
    Search,
    SideNav,
<<<<<<< HEAD
    Footer,
    
=======
    Footer
  },
  methods:{
    ...mapActions(['setLoginUser','deleteLoginUser','fetchOrderItems','clearOrderItems'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        this.setLoginUser(user);
        this.fetchOrderItems();
        this.$router.push('/').catch(() => {});      
      }else{
        this.deleteLoginUser();
        this.clearOrderItems();
        this.$router.push('/').catch(() => {})
      }
    })
>>>>>>> 01a5295fcf5d8e80cc2439d802a69ea74c5f75b5
  }
}
</script>
