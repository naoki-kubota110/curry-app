<template>
  <v-footer
    color="#FFAB40"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="brown"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class=" py-4 text-center white--text"
        cols="12"
      >
       Copyright©︎ {{ new Date().getFullYear() }} — <strong>ラクラクカリー All Rights Reserved</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'ショッピングカート',
        '注文履歴',
        'ログアウト',
      ],
    }),
  }
</script>
    
