<template>
<v-container>
<!-- <div v-for="order,index in orderedItems" :key="index">
    <div v-for="itemInfo,index in order.itemInfo" :key="index">
        <div>id:{{itemInfo.id}}</div>
        <div>num:{{itemInfo.itemNum}}</div>
        <div>itemId:{{itemInfo.itemId}}</div>
    </div>
</div> -->
</v-container>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        item(){
            if(this.$store.state.ordetedItems){
                return console.log('動いとる')
            }else{
                return console.log('うごかkない')
            }
        },
        // orderedItems(){
        //     if(this.$store.state.orderedItems){
        //         console.log('動いてる')
        //         let itemData = this.$store.state.itemData;
        //         let orderedItems = this.$store.state.orderedItems;
        //         let array = []
        //         orderedItems.forEach((order)=>{
        //             let itemInfo = order.itemInfo;
        //             itemData.forEach((item)=>{
        //                 if(itemInfo.itemId==item.id){
        //                     item.num = itemInfo.itemNum
        //                     item.orderId = itemInfo.id
        //                     let a = JSON.stringify(item)
        //                     a = JSON.parse(a)
        //                     array.push(a)
        //                     console.log(array)
        //                 }
        //             })
        //         })
        //         return array
        //     }else{
        //         return console.log('aa')
        //     }
        // },
    }
}
</script>