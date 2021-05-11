<template>
<v-container>
<h8>商品を検索する</h8>
  <button type="search" class="btn btn-primary" data-toggle="modal" data-target="#addArticleModal">
    検索
  </button>
    <button type="delete" class="btn btn-primary" data-toggle="modal" data-target="#addArticleModal">
    クリア
  </button>
<!--ここから追加-->
<div class="form-inline my-2 my-lg-0">
  <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search_term" aria-label="Search" />
  <button class="btn btn-outline-success my-2 my-sm-0" v-on:click.prevent="getArticles()">
    Search
  </button>
</div>
</v-container>
</template>
<!--ここまで-->