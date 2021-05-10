<template>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      label="お名前"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="メールアドレス"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="post"
      :error-messages="postErrors"
      label="郵便番号"
      required
      @input="$v.post.$touch()"
      @blur="$v.post.$touch()"
    ></v-text-field>

    <v-btn
      class="mr-4"
      @click="この内容で注文する"
    >
      submit
    </v-btn>
    </form>
    </template>
    

<script>
  import { validationMixin } from 'vuelidate'
  import { required,  email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required },
      email: { required, email },
      post:{ required }
      },

    data ()  {
        return{
    name: '',
      email: '',
      post:'',
        }
    },

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('名前を入力して下さい')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('メールアドレスを入力して下さい')
        !this.$v.email.required && errors.push('メールアドレスの形式が不正です')
        return errors
      },
      postErrors () {
        const errors = []
        if (!this.$v.post.$dirty) return errors
        !this.$v.post.post && errors.push('郵便番号を入力して下さい')
        !this.$v.post.required && errors.push('郵便番号はXXX-XXXXの形式で入力してください')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
    
    },
    }
</script>