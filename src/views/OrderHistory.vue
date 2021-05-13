<template>
    <div>
        <v-container v-for="(item, index) in historyBox" :key="index">
        {{item}}
    </v-container>
    <button @click="showHistory">ボタン</button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name:'OrderHistory',
    methods:{
        showHistory(){
            console.log(this.$store.state.historyBox)
        }
    },
    computed:{
        ...mapGetters(["historyBox"]),
    }

}
</script>
