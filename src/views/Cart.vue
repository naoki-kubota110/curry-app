<template>
<v-container>
    <div v-if="cartItems">
    <v-data-table 
    :headers="headers"
    :items="cartItems"
    :items-per-page="3"
    class="elevation-1"
    >
        <template v-slot:[`item.price`]="{ item }">
            <td>{{item.price}}円</td>
        </template>
        <template v-slot:[`item.number`]="{ item }">
            <td>{{item.number}}個</td>
        </template>
        ここに画像をスロットで表示させる -->
        <template v-slot:[`item.img`]="{ item }">
            <img :src="item.img" width="100px" height="100px">
        </template>
        <template v-slot:[`item.sum`]="{ item }">
            <td>{{item.price*item.number}}円</td>
        </template>
        <template v-slot:[`item.delete`]="{ item }" >
            <v-btn @click="deleteConfirm(item.cartId)" color="error"><strong>削除</strong></v-btn>
        </template>
    </v-data-table>
    </div>
    <div v-else>
        <h1>商品はありません</h1>
    </div>
</v-container>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            headers:[
                {text:'',value:'img',sortable:false},
                {text:'商品名',value:'name'},
                {text:'価格(税抜)',value:'price'},
                {text:'数量',value:'number'},
                {text:'小計',value:'sum'},
                {value:'delete',sortable:false},
            ],
        }
    },
    computed:{
        cartItems(){
            if(this.$store.state.cartItems){
                let itemData = this.$store.state.itemData;
                let cartItems = this.$store.state.cartItems;
                let itemInfo = cartItems.itemInfo
                let array = [];
                itemInfo.forEach((item)=>{
                    console.log(item)
                    const sameId = (element) => element.id === item.itemId;
                    let sameIdItem = itemData.find(sameId);
                    array.push(sameIdItem);
                })
                return array
            }else {
                return null
            }

        }
    },
    methods:{
        ...mapActions(['deleteCartItem']),
        deleteConfirm(cartId){
            if(confirm('削除してもよろしいですか？'))
            this.deleteCartItem(cartId)
        }
    }
}
</script>