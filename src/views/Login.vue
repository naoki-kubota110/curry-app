<template>
    <v-app>
        <v-row>
            <v-col cols="12" sm="10" md="8" lg="6">
                <v-card>
                    <p v-if="$store.state.errorMsg">
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
                            <!-- ここ怪しい -->
                            <v-btn @click="$router.push('/')">キャンセル</v-btn>
                            <v-btn color="primary" @click="signIn">ログイン</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
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
    created(){
        this.errorDelete();
    },
    methods:{
        ...mapActions(['login', errorDelete]),
        signIn(){
            this.login({email:this.email,password:this.password});
            this.email = '';
            this.password = '';
        }
    }
}
</script>
