<template>
<div>
		<!-- search form -->
    <div class="row">
      <h1>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addArticleModal">
          商品を検索する
          
        </button>
      </h1>

      <!--ここから追加-->
      <div></div>
      <label for="code" class="control-label col-sm-2">商品名</label>
      <div class="col-sm-9">
			<input type="text" name="code" id="code" class="form-control input-sm" />
      </div>  
      <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="search_term" aria-label="Search" /><br/>
			<div class="text-center">
					<v-btn type="submit" value="検索" class="btn btn-primary">検索</v-btn>
					<v-btn type="reset" value="クリア" class="btn btn-default">クリア</v-btn>
      </div>
		</div>

     <v-flex xs12>
            <h1>カレー一覧</h1>
        </v-flex>
        <v-flex xs12 mt-5 justify-center>
            <v-data-table :headers="headers" :items="addresses">
                <template v-slot:item.action="{item}">
                    <router-link :to="{name: 'Address_edit', params: {address_id: item.id}}">
                    <v-icon small class="mr-2">mdi-pencil</v-icon></router-link>
                    
                    <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
                    
                </template>
            </v-data-table> 
      </v-flex>
</div>
</template>


<script>
//import 
  export default {
    name: 'Home',
    components: {
    },
  }

</script>
	