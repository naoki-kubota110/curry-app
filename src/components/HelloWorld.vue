<template>
 <v-app>
   <v-container text-xs-center>
     <v-layout row wrap justify-center>
   <v-flex xs6 mt-6>
      <v-form ref="form" v-model="valid" lazy-validation>
   <p class="font-weight-bold"><big>お届け先情報</big></p>
  <div>お名前<v-text-field label=""  v-model="addresses.name" :rules="nameRules">
 </v-text-field></div>
  <div>メールアドレス<v-text-field label="" v-model="addresses.email" :rules="emailRules">
 </v-text-field></div>
  <div>郵便番号<v-text-field label="" v-model="addresses.post" :rules="postRules">
 </v-text-field></div>
  <div>住所
    <v-text-field label=""  v-model="addresses.address" :rules="addressRules">
 </v-text-field></div>
  <div>電話番号<v-text-field label="" v-model="addresses.phone" :rules="phoneRules">
 </v-text-field></div>


  <div>配達日時
            <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="addresses.date"
              label="クリックして日付を選択してください"
              prepend-icon=""
              readonly
              v-on="on"
              :rules="dateRules"
            ></v-text-field>
          </template>
          <v-date-picker v-model="addresses.date" :allowed-dates="allowedDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
          </v-date-picker>
        </v-menu>

  <!-- <input type="date"  v-model="addresses.date" :rules="dateRules"> -->
  <v-select v-model="addresses.time"  :items="items" label="" :rules="timeRules"></v-select></div>


 <p class="font-weight-bold"><big>お支払い方法</big></p>
 <v-radio-group row v-model="addresses.radioGroup2" :rules="payRules">
            <v-radio label="代金引換" :value="代金引換" checked ></v-radio>
           <v-radio label="クレジットカード" :value="クレジットカード" ></v-radio>
          </v-radio-group>
          <v-row class="button">
            <v-col>
 <v-btn  @click="submit" :disabled="!valid" round class="orange">この内容で注文する</v-btn>
 <!-- <span v-if="success">送信成功！</span> -->
            </v-col>
          </v-row>
      </v-form>
   </v-flex>
   </v-layout>
   </v-container>

  <v-row>
<v-col cols=12 lg=12 md=12 sm=12 align="center">
  <h1>決済が完了しました！</h1>
  <p>この度はご注文ありがとうございます。</p>
  <p>お支払い先は、お送りしたメールに記載してありますのでご確認ください。</p>
  <p>メールが届かない場合は「注文履歴」からご確認ください。</p>
  <v-btn
      depressed
      color="red"
    >
      トップ画面を表示する
    </v-btn>
</v-col>
</v-row>
</v-app>
</template>

<style lang="scss">
.button {
  text-align: center;
}
</style>

<script>
export default {
    data () {
      return {
        valid: false,
        nameRules: [
        v => !!v || '名前を入力してください',
        ],
        emailRules:[
        v => !!v || 'メールアドレスを入力してください',
        v => /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || 'メールアドレスの形式が不正です',
        ],
        postRules:[
        v => !!v || '郵便番号を入力してください',
        v => /^\d{3}-\d{4}$/.test(v) || '郵便番号はXXX-XXXXの形式で入力してください',
        ],
        addressRules:[
         v => !!v || '住所を入力してください',
        ],
        phoneRules:[
         v => !!v || '電話番号を入力してください',
         v=> /^\d{2,5}-\d{1,4}-\d{4}$/.test(v) || '電話番号はXXXX-XXXX-XXXXの形式で入力してください',
        ],
        dateRules:[
         v => !!v || '配達日を入力してください',
        ],
        timeRules:[
         v => !!v || '配達時刻を選択してください',
        ],
        payRules:[
         v => !!v || 'お支払い方法を選択してください',
        ],
        addresses:{},
        pay:{},
        radioGroup: 1,
        items: ['10時', '11時', '12時', '13時','14時','15時','16時','17時','18時'],
      }
    },
    methods: {
    allowedDate: function (val) {
      // 今日を選べるようにする
      //日付の初期化
      let today = new Date() 
      today = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      )
      //いつまで選択できるかの設定
      let maxAllowedDay = new Date()
      maxAllowedDay.setDate(
        today.getDate() +1000
      )
      maxAllowedDay = new Date(
        maxAllowedDay.getFullYear(),
        maxAllowedDay.getMonth(),
        maxAllowedDay.getDate()
      )
      return today <= new Date(val) && new Date(val) <= maxAllowedDay
     },


    submit () {
      const inquiry=`この内容で注文します
      【お名前】${this.addresses.name}
      【メールアドレス】${this.addresses.email}
      【郵便番号】${this.addresses.post}
      【住所】${this.addresses.address}
      【電話番号】${this.addresses.phone}
      【配達日】${this.addresses.date}
      【配達時刻】${this.addresses.time}
      【お支払い方法】${this.addresses.radioGroup2}
      `
      confirm(inquiry);
      
      if(this.$refs.form.validate()) {
       
         this.success = true;
      }else{
        this.success = false;
      }
    }
  }
}
</script>


