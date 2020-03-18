<template>
  <div>
    <h1>Logs</h1>
    <cv-dropdown style="width:200px; margin:20px auto 20px auto" placeholder="select client" :value="value" v-model="client">
      <span v-for="(name,index) in clientList" :key="index">
      <cv-dropdown-item :value="name">{{name}}</cv-dropdown-item>
      </span>
    </cv-dropdown>
    <button @click="getQuery">Go Horse</button>
    <div class="listArea">
    <cv-structured-list v-for="(log, index) in logs" :key="index">
      <template slot="headings">
        <cv-structured-list-heading style="width: 10%">Customer</cv-structured-list-heading>
        <cv-structured-list-heading style="width: 30%">Summary</cv-structured-list-heading>
        <cv-structured-list-heading>Problem Description</cv-structured-list-heading>
      </template>
      <template slot="items">
        <cv-structured-list-item style="textAlign:left">
        <cv-structured-list-data>{{log.Customer}}</cv-structured-list-data>
        <cv-structured-list-data>{{log.Summary}}</cv-structured-list-data>
        <cv-structured-list-data>{{log.Problem_Description}}</cv-structured-list-data>
      </cv-structured-list-item>
      </template>
    </cv-structured-list>
    </div>
  </div>
</template>

<script>
import queryService from "../queryService";
export default {
  name: "Queries",
  data() {
    return {
      logs: [],
      error: "",
      client: "",
      value: '',
      clientList: [
        'IGA', 'BNC', 'DELTA'
      ]
    };
  },
  methods: {
    test() {
      console.log(this.client)
    },
    async getQuery() {
      try {
        this.logs = await queryService.getData(this.client);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.customer {
  background-color: rgb(228, 228, 228);
}
.listArea {
  width: 80%;
  margin: auto;
}
.sep {
  background-color: #42b983;
  height: 1px;
  width: 100px;
  margin: 20px auto 20px auto;
}
</style>
