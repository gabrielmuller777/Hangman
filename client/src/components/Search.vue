<template>
<div>
    <div class="searchBar">
        <input class="txtinput" placeholder="Search..." v-model="keyword"/>
        <button class="srcbtn" @click="getQuery">Search</button>
    </div>
    <div class="listArea">
            <cv-structured-list>
            <template slot="headings">
                <cv-structured-list-heading style="width: 150px; backgroundColor:rgb(221,225,230)">Request Number</cv-structured-list-heading>
                <cv-structured-list-heading style="width: 900px; backgroundColor:rgb(221,225,230)">Summary</cv-structured-list-heading>
                <cv-structured-list-heading style="width: 250px; backgroundColor:rgb(221,225,230)">Type</cv-structured-list-heading>
                <cv-structured-list-heading style="width: 250px; backgroundColor:rgb(221,225,230)">Customer</cv-structured-list-heading>
                <cv-structured-list-heading style="width: 250px; backgroundColor:rgb(221,225,230)">Date</cv-structured-list-heading>
                <cv-structured-list-heading style="width: 250px; backgroundColor:rgb(221,225,230)">User</cv-structured-list-heading>

            </template>
            <template slot="items" >
                <cv-structured-list-item style="textAlign:left" v-for="(log, index) in logs" :key="index">
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Request_Number}}</cv-structured-list-data>
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Summary}}</cv-structured-list-data>
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Type}}</cv-structured-list-data>
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Customer}}</cv-structured-list-data>
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.Date}}</cv-structured-list-data>
                <cv-structured-list-data style="backgroundColor:rgb(242,244,248)">{{log.User}}</cv-structured-list-data>



            </cv-structured-list-item>
            </template>
            </cv-structured-list>
    </div>
        <cv-loading :active="isActive" overlay></cv-loading>
</div>
</template>
<script>
import queryService from "../queryService";

export default {
  components: {
      
  },
  name: "Search",
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
      var sql = `SELECT * FROM mwx86642.gendata WHERE UPPER("Problem_Description") LIKE UPPER('%${this.keyword}%')`
      try {
        this.logs = await queryService.getData(sql);
        this.isActive=false
      } catch (err) {
        this.error = err;
      }
    }, //filter1
    async getQuery2() {

    },

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
  height: 45px;
  padding-left: 20px;
  justify-content: flex-end;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
}
.header-right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  float: right;
  flex: 1 1;
  margin-right: 2rem;

}
.navLabel {
  font-size: 1rem;
  text-align: center;
  padding: 8px 0 8px 0;
  margin-left: 20px;
  color: #f7f3f2
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
  align-items: center;
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
  margin: 0px !important;
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

.logo{
  height: 25px;
  fill: #ffffff;
}

</style>

