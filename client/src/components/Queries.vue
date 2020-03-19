<template>
  <div>
    <div class="navbar">
      <img src="../assets/logo.png" alt="logo" style="height:25px">
      <span class="navLabel">
        <label >TechLogR</label>
      </span>
    </div>
    <div class="searchBar">
      <cv-dropdown class="drop" size="40px" placeholder="select client" :value="value" v-model="client">
        <span v-for="(name,index) in clientList" :key="index">
        <cv-dropdown-item :value="name">{{name}}</cv-dropdown-item>
        </span>
      </cv-dropdown>
      <button class="srcbtn" @click="getQuery">Go Horse</button>
    </div>
    <div class="listArea">
    <cv-structured-list>
      <template slot="headings">
        <cv-structured-list-heading style="width: 10%; backgroundColor:rgb(221,225,230)">Date</cv-structured-list-heading>
        <cv-structured-list-heading style="width: 30%; backgroundColor:rgb(221,225,230)">Summary</cv-structured-list-heading>
        <cv-structured-list-heading style="backgroundColor:rgb(221,225,230)">Problem Description</cv-structured-list-heading>
      </template>
      <template slot="items" >
        <cv-structured-list-item style="textAlign:left" v-for="(log, index) in logs" :key="index">
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Date}}</cv-structured-list-data>
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Summary}}</cv-structured-list-data>
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Problem_Description}}</cv-structured-list-data>
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
      clientList: [],
    };
  },
  async created() {
    var sql = `select distinct "Customer" from mwx86642.testex`
    var clients = []
    try {
        clients = await queryService.getData(sql);
        for(let idx in clients) {
          this.clientList.push(clients[idx].Customer)
        }
      } catch (err) {
        this.error = err;
      }
  },
  methods: {
    test() {
      console.log(this.client)
    },
    async getQuery() {
      var sql = `select * from mwx86642.testex where "Customer" like '${this.client}'`
      try {
        this.logs = await queryService.getData(sql);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  margin: 40px 0 0;
}
.navbar {
  background-color: white;
  height: 45px;
  padding: 10px 0 10px 14px;
  text-align: start;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
.navLabel {
  font-size: 16px;
  height: 45px;
  margin-left: 15px;
}
.searchBar {
  max-width: 1400px;
  height: 40px;
  margin: 10px auto 20px auto;
  text-align: start;
}
.drop {
  width: 200px !important;
  height: 40px !important;
  display: inline-block;
}
.srcbtn {
  width: 100px;
  height: 40px;
  margin-left: 20px;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  background-color: rgb(15, 98, 254);
  border: none;
  color: white;
  font-size: 15px;
  text-align: center;
  display: inline-flex;
}
.customer {
  background-color: rgb(228, 228, 228);
}
.listArea {
  width: 1400px;
  margin: auto;
}
</style>
