<template>
<v-container>
    <v-btn icon :to="{name:'ItemDetail'}">戻る</v-btn>
    <div v-if="cartLength">
    <v-data-table
    :headers="headers"
    :items="cartItems"
    :items-per-page="5"
    item-key="cartId"
    class="elevation-1"
    disable-sort
    >
        <template v-slot:[`item.price`]="{ item }">
            <td>{{item.price}}円</td>
        </template>
        <template v-slot:[`item.number`]="{ item }">
            <td>{{item.itemNum}}個</td>
        </template>
        <template v-slot:[`item.img`]="{ item }">
            <img :src="item.img" width="100px" height="100px">
        </template>
        <template v-slot:[`item.sum`]="{ item }">
            <td>{{item.price*item.itemNum}}円</td>
        </template>
        <template v-slot:[`item.delete`]="{ item }">
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
                let itemInfo = cartItems.itemInfo;
                console.log(itemInfo)
                let array = [];
                itemInfo.forEach((itemIn)=>{
                    itemData.forEach((itemD)=>{
                        if(itemIn.itemId==itemD.id){
                            itemD.itemNum = itemIn.itemNum
                            itemD.cartId = itemIn.id
                            console.log(itemD)
                            let a = JSON.stringify(itemD)
                            a = JSON.parse(a)
                            array.push(a)
                        }
                    })
                })
                console.log(array)
                return array
            }else {
                return null
            }

        },
        cartLength(){
            if(this.$store.state.cartItems){
                let cartItems = this.$store.state.cartItems
                if(cartItems.itemInfo.length===0){
                    return false
                }else{
                    return true
                }
            }else{
                return false
            }
        }
    },
    methods:{
        ...mapActions(['deleteItemFromCart']),
        deleteConfirm(cartId){
            if(confirm('削除してもよろしいですか？'))
            this.deleteItemFromCart({cartId:cartId})
        }
    }
}
</script>