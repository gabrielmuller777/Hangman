<template>
  <div>

      <input class="txtinput" placeholder="Search..." v-model="keyword"/>
      <button class="srcbtn" @click="getQuery">Search</button>
    </div>

</template>

<script>
import queryService from "../queryService";
export default {
  name: "Insert",
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
      var sql = `INSERT INTO mwx86642.gendata where "Customer" like '${this.client}' AND "Solution" like '%${this.keyword}%'`
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