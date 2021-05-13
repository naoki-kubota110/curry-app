<template>
<v-container>
    <div v-for ="itemInfo,index in orderedItemsInfo" :key="index">{{itemInfo.num}}</div>
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
        orderedItemsInfo(){
            if(this.$store.state.orderedItems){
                let itemData = this.$store.state.itemData;
                let ordereditems = this.$store.state.orderedItems;
                let array = []
                ordereditems.forEach((order)=>{
                    order.itemInfo.forEach((info)=>{
                        itemData.forEach((item)=>{
                            if(info.itemId==item.id){
                                item.num = info.itemNum
                                item.orderId = info.id
                                let a = JSON.stringify(item)
                                a = JSON.parse(a)
                                array.push(a)
                            }
                        })
                    })
                })
                return array
            }else{
                return []
            }
        },
    }
}
</script>