<template>
  <div>
    <div class="navbar">
      <img src="../assets/logo.png" alt="logo" style="height:25px">
        <label class="navLabel">TechLogR</label>
        <a href="">DEV Toucans</a>
    </div>
    <div class="searchBar">

      <cv-dropdown class="drop" size="40px" placeholder="select client" :value="value" v-model="client">
        <span v-for="(name,index) in clientList" :key="index">
        <cv-dropdown-item style="padding:0px 42px 0px 16px" :value="name">{{name}}</cv-dropdown-item>
        </span>
      </cv-dropdown>
      <input class="txtinput" placeholder="Search..." v-model="keyword"/>
      <button class="srcbtn" @click="getQuery">Search</button>
    </div>
    <div class="listArea">
    <cv-structured-list>
      <template slot="headings">
        <cv-structured-list-heading style="width: 150px; backgroundColor:rgb(221,225,230)">Date</cv-structured-list-heading>
        <cv-structured-list-heading style="width: 900px; backgroundColor:rgb(221,225,230)">Problem Description</cv-structured-list-heading>
        <cv-structured-list-heading style="width: 250px; backgroundColor:rgb(221,225,230)">Solution</cv-structured-list-heading>
      </template>
      <template slot="items" >
        <cv-structured-list-item style="textAlign:left" v-for="(log, index) in logs" :key="index">
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Date}}</cv-structured-list-data>
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Problem_Description}}</cv-structured-list-data>
        <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Solution}}</cv-structured-list-data>
      </cv-structured-list-item>
      </template>
    </cv-structured-list>
    </div>
    <cv-loading :active="isActive" overlay></cv-loading>
</div>
</template>

<script>
import queryService from "../queryService";
//import Insert from "../components/Insert.vue";
export default {
  components: {
    //Insert
  },
  name: "Queries",
  data() {
    return {
      logs: [],
      error: "",
      client: "",
      value: '',
      clientList: [],
      isActive: false,
      dropload: true,
      keyword: "",
    };
  },
  async created() {
    var sql = `select distinct "Customer" from mwx86642.gendata`
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
    async getQuery() {
      this.isActive=true
      var sql = `select * from mwx86642.gendata where "Customer" like '${this.client}' AND "Solution" like '%${this.keyword}%'`
      try {
        this.logs = await queryService.getData(sql);
        this.isActive=false
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  font-size: 16px;
  margin-left: 20px;
}
h1 {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  margin: 40px 0 0;
}
.navbar {
  display: flex;
  background-color: white;
  height: 45px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
.navLabel {
  font-size: 16px;
  height: 32px;
  text-align: center;
  padding: 8px 0 8px 0;
  margin-left: 20px;
}
.searchBar {
  display: flex;
  max-width: 1400px;
  max-height: 40px;
  margin: 10px auto 10px auto;
  padding: 0 0 0 0;
  align-items: flex-end;
  justify-content: flex-start;
}
.tabs_comp {
  display: flex;
  max-width: 1400px;
  margin: auto;
  padding: 0 0 0 0;
  align-items: flex-end;
  justify-content: flex-start;
}
.drop {
  max-width: 200px !important;
  height: 40px;
  font-size: 15px;
  margin: 0 0 0 0 !important;
}
.txtinput {
  max-width: 200px !important;
  height: 40px !important;
  margin: 0 0 0 20px !important;
  border: none;
  background-color: #f7f3f2;
  font-size: 15px !important;
  padding: 0 0 0 10px;
}
.srcbtn {
  width: 100px;
  height: 40px;
  margin: 0 0 0 20px !important;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  background-color: rgb(15, 98, 254);
  border: none;
  color: white;
  font-size: 15px;
  text-align: center;
}
.customer {
  background-color: rgb(228, 228, 228);
}
.listArea {
  width: 1400px;
  margin: auto;
}

</style>