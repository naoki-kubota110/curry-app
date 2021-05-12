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
  <div>配達日時</div>
  <input type="date"  v-model="addresses.date" :rules="dateRules">
  <v-select v-model="addresses.time" :items="items" label="" :rules="timeRules"></v-select>
 <p class="font-weight-bold"><big>お支払い方法</big></p>
 <v-radio-group row v-model="addresses.radioGroup2" :rules="payRules">
            <v-radio label="代金引換" :value="代金引換" ></v-radio>
           <v-radio label="クレジットカード" :value="クレジットカード" ></v-radio>
          </v-radio-group>
          <v-row class="button">
            <v-col>
 <v-btn  @click="submit" round class="orange">この内容で注文する</v-btn>
 <!-- <span v-if="success">送信成功！</span> -->
            </v-col>
          </v-row>
      </v-form>
   </v-flex>
   </v-layout>
   </v-container>
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
        valid: true,
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
        // dateRules:[
        //  v => !!v || '配達日を入力してください',
        // ],
        timeRules:[
         v => !!v || '配達日時を選択してください',
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
      //バリデーションチェック
      if(this.$refs.form.validate()) {
       //送信処理
         this.success = true;
      }else{
        this.success = false;
      }
       //this.$refs.form.reset()
      }
    },
  }
</script>
