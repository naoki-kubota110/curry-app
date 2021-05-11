<template>
    <v-app>
        <v-row justify="center">
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card>
                    <v-card-title>新規登録</v-card-title>
                    <v-divider></v-divider>
                    <p style="color:red;" v-if="$store.state.errorMsg">
                        <strong>{{$store.state.errorMsg}}</strong>
                    </p>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="email"
                                        prepend-inner-icon="mdi-email" 
                                        type="email" 
                                        label="メールアドレス"/>
                            <v-text-field v-model="password"
                                        prepend-inner-icon="mdi-key"
                                        type="password"
                                        label="パスワード"/>
                            <v-btn color="primary" @click="signIn">ログイン</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
                <router-link to='/register' style='text-decoration: none; color: bulue;'>ユーザー登録はこちら</router-link>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    data(){
        return {
            email:'',
            password:'',
        }
    },
    methods:{
        ...mapActions(['login']),
        signIn(){
            this.login({email:this.email,password:this.password});
            this.email = '';
            this.password = '';
        }
    }
}
</script>