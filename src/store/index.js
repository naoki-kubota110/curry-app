import firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user:null,
  },
  mutations: {
    setLoginUser(state, user){
      state.login_user = user;
    },
  },
  actions: {
    //ユーザー登録
    register({state, commit}, {name,email,password}){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = firebase.auth().currentUser;
        commit('setLoginUser', user);
      }).catch((error) => {
        state.errorMsg = error.message;
      })
    },
    //ログイン
    login({state,commit}, {email, password}){
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user) => {
        commit('setLoginUser', user);
      }).catch((error) =>{
        state.errorMsg = error.message;
      })
    },
    errorDelete({commit}){
      commit('errorDelete');
    }
  },
  modules: {
  }
})
