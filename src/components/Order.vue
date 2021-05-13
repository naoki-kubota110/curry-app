<template>
  <v-app>
    <v-container text-xs-center>
      <v-layout row wrap justify-center>
        <v-flex xs6 mt-6>
          <v-form ref="form" v-model="valid" lazy-validation>
            <p class="font-weight-bold"><big>お届け先情報</big></p>
            <div>
              お名前
              <v-text-field
                v-model="orderInfo.name"
                :rules="nameRules"
              >
              </v-text-field>
            </div>
            <div>
              メールアドレス
              <v-text-field
                v-model="orderInfo.email"
                :rules="emailRules"
              >
              </v-text-field>
            </div>
            <div>
              郵便番号
              <v-text-field
                v-model="orderInfo.zip"
                :rules="zipRules"
              >
              </v-text-field>
            </div>
            <div>
              住所
              <v-text-field
                v-model="orderInfo.address"
                :rules="addressRules"
              >
              </v-text-field>
            </div>
            <div>
              電話番号
              <v-text-field
                v-model="orderInfo.phone"
                :rules="phoneRules"
              >
              </v-text-field>
            </div>
            <div>配達日時</div>
            <input type="date" v-model="orderInfo.date" :rules="dateRules">
            <v-select
              v-model="orderInfo.time"
              :items="items"
              :rules="timeRules"
            ></v-select>
            <div>お支払い方法</div>
            <v-radio-group
              row
              v-model="orderInfo.status"
              :rules="payRules"
            >
              <v-radio label="代金引換" :value="1"></v-radio>
              <v-radio label="クレジットカード" :value="2"></v-radio>
            </v-radio-group>
            <v-row>
              <v-col>
                <v-btn rounded>リセット</v-btn>
                <v-btn @click="submit" rounded class="orange">この内容で注文する</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style scoped>
.button {
  text-align: center;
}
</style>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      orderInfo: {
        status:1
      },
      valid: true,
      nameRules: [(v) => !!v || "名前を入力してください"],
      emailRules: [
        (v) => !!v || "メールアドレスを入力してください",
        (v) =>
          /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(
            v
          ) || "メールアドレスの形式が不正です",
      ],
      zipRules: [
        (v) => !!v || "郵便番号を入力してください",
        (v) =>
          /^\d{3}-\d{4}$/.test(v) ||
          "郵便番号はXXX-XXXXの形式で入力してください",
      ],
      addressRules: [(v) => !!v || "住所を入力してください"],
      phoneRules: [
        (v) => !!v || "電話番号を入力してください",
        (v) =>
          /^\d{2,5}-\d{1,4}-\d{4}$/.test(v) ||
          "電話番号はXXXX-XXXX-XXXXの形式で入力してください",
      ],
      dateRules:[
       v => !!v || '配達日を入力してください',
      ],
      timeRules: [(v) => !!v || "配達日時を選択してください"],
      payRules: [(v) => !!v || "お支払い方法を選択してください"],
      pay: {},
      items: [
        "10時",
        "11時",
        "12時",
        "13時",
        "14時",
        "15時",
        "16時",
        "17時",
        "18時",
      ],
    };
  },
  methods: {
    ...mapActions(['orderConfirm']),
    submit() {
      const inquiry = `この内容で注文します
      【お名前】${this.orderInfo.name}
      【メールアドレス】${this.orderInfo.email}
      【郵便番号】${this.orderInfo.zip}
      【住所】${this.orderInfo.address}
      【電話番号】${this.orderInfo.phone}
      【配達日】${this.orderInfo.date}
      【配達時刻】${this.orderInfo.time}
      【お支払い方法】${this.orderInfo.status}
      `;
      if(confirm(inquiry)){
        if(this.$store.getters.uid){
          const date = new Date()
          this.orderInfo.orderDate = date.getTime()
          let obj = JSON.stringify(this.$store.state.cartItems)
          obj = JSON.parse(obj)
          obj.name = this.orderInfo.name
          obj.email = this.orderInfo.email
          obj.zip = this.orderInfo.zip
          obj.address = this.orderInfo.address
          obj.phone = this.orderInfo.phone
          obj.date = this.orderInfo.date
          obj.time = this.orderInfo.time
          obj.status = this.orderInfo.status
          obj.orderDate = this.orderInfo.orderDate
          this.orderConfirm({order:obj}).then(()=>{
            this.$router.push('/ordercomp')
          })
        }else{
          this.$router.push('/')
        }
      }
    },
  },
};
</script>
