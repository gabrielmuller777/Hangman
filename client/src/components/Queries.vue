<template>
  <div>
    <h1>Logs</h1>
    <cv-dropdown style="width:200px; margin:20px auto 20px auto" placeholder="select client" :value="value" v-model="client">
      <cv-dropdown-item value="IGA">IGA</cv-dropdown-item>
      <cv-dropdown-item value="DELTA">Delta</cv-dropdown-item>
      <cv-dropdown-item value="BNC">BNC</cv-dropdown-item>
    </cv-dropdown>
    <button @click="getQuery">Go Horse</button>
    <ul v-for="(log, index) in logs" :key="index">
      <li>
        <p class="sep"></p>
        <p>
          <label>Customer:</label>
          {{log.Customer}}
        </p>
        <p>
          <label>Summary:</label>
          {{log.Summary}}
        </p>
        <p>
          <label>Problem Description:</label>
          {{log.Problem_Description}}
        </p>
      </li>
    </ul>
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
      value: ''
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
label {
  color: #42b983;
  font-size: 20px;
}
.sep {
  background-color: #42b983;
  height: 1px;
  width: 100px;
  margin: 20px auto 20px auto;
}
</style>
