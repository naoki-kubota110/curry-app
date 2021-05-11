<template>
<v-container id="container">
<v-layout row rap justify-center>
<form action="cart_list.html">
<div class="row">
    <div class="col-xs-offset-2 col-xs-8">

    <h3 class="text-center">商品詳細</h3>
     <v-row no-gutters>
        <v-col align-self="start">
            <!-- 画像 -->
        <v-img :src="item.img" alt="画像" width="50%" height="50%"></v-img>
        </v-col>
            <!-- タイトルなど -->
        <v-col>
            <v-card-title>{{item.name}}</v-card-title>
            <v-card-subtitle>{{item.author}}</v-card-subtitle>
            <v-card-text>{{item.text}}</v-card-text>
        </v-col>
    </v-row>

        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="inputResponsibleCompany">サイズ</label>
                        </div>
                        <div class="col-sm-12">
                            <label class="radio-inline">
                                <input type="radio" name="responsibleCompany" checked="checked">
                                <span class="price">&nbsp;М&nbsp;</span>&nbsp;&nbsp;{{item.price}}円（税抜）
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="responsibleCompany">
                                <span class="price">&nbsp;Ｌ</span>&nbsp;&nbsp;;{{item.subPrice}}円（税抜）
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div><br>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-12">
                            <label for="inputResponsibleCompany">
                                トッピング：&nbsp;1つにつき
                                <span>&nbsp;М&nbsp;</span>&nbsp;&nbsp;200円(税抜)
                                <span>&nbsp;Ｌ</span>&nbsp;&nbsp;300円(税抜)
                            </label>
                        </div>
                        <div class="col-sm-12">
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">オニオン
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">チーズ
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">ピーマン
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">ロースハム
                            </label><br>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">ほうれん草
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">ぺパロに
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">グリルナス
                            </label>
                            <label class="checkbox-inline">
                                <input type="checkbox" value="">あらびきソーセージ
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="form-group">
                    <div class="row">
                        <div class="col-xs-5 col-sm-5">
                            <label for="">数量:</label>
                            <label class="control-label" style="color: red" for="inputError">数量を選択してください</label> <select name="area" class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-10">
                <div class="form-group">
                    <span id="total-price">この商品金額：{{}} 円(税抜)</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-3">
                <div class="form-group">
                    <p>
                        <v-btn type="submit" value="カートに入れる"></v-btn>
                    </p>

                </div>
            </div>
        </div>
    </div>
</div>
</form>
</v-layout>
</v-container>
</template>

<script>
export default {
    data(){
        return {
            item:'',
            items:this.$store.state.itemData,
            id:'',
            
        }
    },
    // computed: {
        

    created(){
        //let items = this.$store.state.items;
        let paramId = this.$route.params.item_id;
        console.log(this.items);
        this.items.forEach(item => {
            if(item.id===paramId){
                this.item = item
            }
        })
    }
}
</script>