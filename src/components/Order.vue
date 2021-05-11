<template>
<div class="container">
        <h2>お届け先情報</h2>
        <div id="app">
            <!-- 名前フォーム -->
            <div class="form-name">
                <p>お名前</p>
                <!-- エラーメッセージを追加 -->
                <p class="error-name">名前を入力してください</p>
                <input type="text" name="name" placeholder="名前を入力してください" v-model="name">
            </div>
            <!-- Eメールアドレス -->
            <div class="form-email">
                <p>メールアドレス</p>
                <!-- エラーメッセージを追加 -->
                <p class="error-email1">メールアドレスを入力してください</p>
                <p class="error-email2">アドレスの形式が不正です</p>
                <input type="text" name="email" placeholder="メールアドレスを入力してください" v-model="email">
            </div>
        </div>
        <!-- 郵便番号フォーム -->
        <div class="form-phone">
            <p>郵便番号</p>
            <!-- エラーメッセージを追加 -->
            <p class="error-phone">郵便番号を入力してください</p>
            <input type="text" name="phone" placeholder="郵便番号を入力してください" v-model="phone">
        </div>
        <!--住所フォーム -->
        <div class="form-post">
            <p>住所</p>
            <!-- エラーメッセージを追加 -->
            <p class="error-post">住所を入力してください</p>
            <input type="text" name="post" placeholder="住所を入力してください" v-model="post">
        </div>
        <!-- 電話番号フォーム -->
            <div class="form-phone">
                <p>電話番号</p>
                <!-- エラーメッセージを追加 -->
                <p class="error-phone1">電話番号を入力してください</p>
                <p class="error-phone2">電話番号はXXXX-XXXX-XXXXの形式で入力してください</p>
                <input type="text" name="phone" placeholder="電話番号を入力してください" v-model="phone">
            </div>
            
            <!--配達日時-->
            <div class="form-address">
                <p>配達日時</p>
            <input type="radio" name="radio" value="ten">10時
            <input type="radio" name="radio" value="eleven">11時
            <input type="radio" name="radio" value="twelve">12時
            <input type="radio" name="radio" value="thirteen" >13時
            <input type="radio" name="radio" value="fourteen">14時
            <input type="radio" name="radio" value="fifteen">15時
            <input type="radio" name="radio" value="sixteen" >16時
            <input type="radio" name="radio" value="sevevteen">17時
            <input type="radio" name="radio" value="eighiteen">18時
            </div>
            <p>お支払い方法</p>
            <div>代金引換<input type="radio" name="radio" value="money">代金引換</div>
            <div>クレジットカード<input type="radio" name="radio" value="card">クレジットカード</div>
            <div>
                <v-btn>この内容で注文する</v-btn>
        </div>
    </div>
</template>



